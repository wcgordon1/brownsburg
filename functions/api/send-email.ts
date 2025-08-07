import type { PagesFunction } from "@cloudflare/workers-types";

interface Env {
  RESEND_API_KEY: string;
}

interface EmailRequest {
  type: 'quote' | 'callback' | 'contact';
  name: string;
  email?: string;
  phone: string;
  address?: string;
  service?: string;
  message?: string;
  preferredTime?: string;
  preferredContact?: string;
}

// Helper function to generate HTML email content
function generateEmailHTML(data: EmailRequest): string {
  const baseStyles = `
    <style>
      body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
      .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
      .content { padding: 20px; }
      .info-section { margin: 20px 0; }
      .label { font-weight: bold; color: #1e3a8a; }
      .value { margin-bottom: 10px; }
      .footer { background: #f3f4f6; padding: 15px; margin-top: 20px; }
    </style>
  `;

  let subject = '';
  let content = '';

  switch (data.type) {
    case 'callback':
      subject = `Callback Request from ${data.name}`;
      content = `
        <div class="info-section">
          <div class="label">Callback Request Details:</div>
          <div class="value"><strong>Name:</strong> ${data.name}</div>
          <div class="value"><strong>Phone:</strong> ${data.phone}</div>
          <div class="value"><strong>Preferred Time:</strong> ${data.preferredTime || 'Not specified'}</div>
        </div>
      `;
      break;

    case 'quote':
      subject = `Quote Request from ${data.name}`;
      content = `
        <div class="info-section">
          <div class="label">Quote Request Details:</div>
          <div class="value"><strong>Name:</strong> ${data.name}</div>
          <div class="value"><strong>Email:</strong> ${data.email || 'Not provided'}</div>
          <div class="value"><strong>Phone:</strong> ${data.phone}</div>
          <div class="value"><strong>Property Address:</strong> ${data.address || 'Not provided'}</div>
          <div class="value"><strong>Service Needed:</strong> ${data.service || 'Not specified'}</div>
          ${data.message ? `<div class="value"><strong>Additional Details:</strong><br>${data.message.replace(/\n/g, '<br>')}</div>` : ''}
        </div>
      `;
      break;

    case 'contact':
      subject = `Contact Form Submission from ${data.name}`;
      content = `
        <div class="info-section">
          <div class="label">Contact Form Details:</div>
          <div class="value"><strong>Name:</strong> ${data.name}</div>
          <div class="value"><strong>Email:</strong> ${data.email || 'Not provided'}</div>
          <div class="value"><strong>Phone:</strong> ${data.phone}</div>
          <div class="value"><strong>Property Address:</strong> ${data.address || 'Not provided'}</div>
          <div class="value"><strong>Service Needed:</strong> ${data.service || 'Not specified'}</div>
          <div class="value"><strong>Preferred Contact:</strong> ${data.preferredContact || 'Not specified'}</div>
          <div class="value"><strong>Preferred Time:</strong> ${data.preferredTime || 'Not specified'}</div>
          ${data.message ? `<div class="value"><strong>Project Details:</strong><br>${data.message.replace(/\n/g, '<br>')}</div>` : ''}
        </div>
      `;
      break;
  }

  return `
    ${baseStyles}
    <div class="header">
      <h1>Brownsburg Pressure Washing</h1>
      <h2>${subject}</h2>
    </div>
    <div class="content">
      ${content}
      <div class="footer">
        <p><strong>Action Required:</strong> Please respond to this ${data.type} request promptly.</p>
        <p><strong>Customer Contact:</strong> ${data.phone}${data.email ? ` | ${data.email}` : ''}</p>
      </div>
    </div>
  `;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    // Parse the request body
    const data: EmailRequest = await request.json();

    // Validate required fields
    if (!data.name || !data.phone) {
      return new Response(
        JSON.stringify({ error: 'Name and phone are required' }),
        { 
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Generate email content
    const emailHTML = generateEmailHTML(data);
    const subject = data.type === 'callback' 
      ? `Callback Request from ${data.name}`
      : data.type === 'quote'
      ? `Quote Request from ${data.name}`
      : `Contact Form Submission from ${data.name}`;

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'website@brownsburgpressurewashing.com',
        to: [
          'will@brownsburgpressurewashing.com',
          'will.nft.works@gmail.com',
          'wcgordon1@gmail.com',
          'will@bestelectricianjobs.com',
          'support@popresume.com',
          'will@starterbuild.com'
        ],
        subject: subject,
        html: emailHTML
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', errorText);
      
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    const result = await response.json();
    
    return new Response(
      JSON.stringify({ success: true, id: result.id }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
};

// Handle preflight requests for CORS
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};