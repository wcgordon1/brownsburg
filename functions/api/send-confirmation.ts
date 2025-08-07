import type { PagesFunction } from "@cloudflare/workers-types";

interface Env {
  RESEND_API_KEY: string;
}

interface ConfirmationRequest {
  type: 'quote' | 'callback' | 'contact';
  name: string;
  email: string;
  phone: string;
  service?: string;
}

// Helper function to generate customer confirmation email HTML
function generateConfirmationHTML(data: ConfirmationRequest): string {
  const baseStyles = `
    <style>
      body { 
        font-family: Arial, sans-serif; 
        color: #333; 
        line-height: 1.6; 
        margin: 0; 
        padding: 0;
        background-color: #f8fafc;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .header { 
        background: #1e3a8a; 
        color: white; 
        padding: 30px 20px; 
        text-align: center; 
      }
      .logo {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 auto 20px;
        display: block;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
      }
      .content { 
        padding: 30px; 
      }
      .greeting {
        font-size: 18px;
        color: #1e3a8a;
        margin-bottom: 20px;
      }
      .message {
        margin-bottom: 25px;
        font-size: 16px;
      }
      .cta-section {
        background: #f1f5f9;
        padding: 25px;
        border-radius: 8px;
        text-align: center;
        margin: 25px 0;
      }
      .cta-title {
        color: #1e3a8a;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .button-group {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
      }
      .btn {
        display: inline-block;
        padding: 14px 32px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
        width: 200px;
        text-align: center;
        transition: all 0.3s ease;
      }
      .btn-primary {
        background: #3b82f6;
        color: white;
      }
      .btn-secondary {
        background: #10b981;
        color: white;
      }
      .service-info {
        background: #e0f2fe;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
        border-left: 4px solid #0ea5e9;
      }
      .footer {
        background: #f8fafc;
        padding: 30px 20px;
        text-align: center;
        font-size: 14px;
      }
      .company-name {
        font-size: 20px;
        font-weight: bold;
        color: #1e3a8a;
        margin-top: 20px;
        margin-bottom: 8px;
      }
      .company-tagline {
        font-size: 14px;
        color: #64748b;
        margin-bottom: 20px;
      }
      .company-info {
        font-size: 13px;
        line-height: 1.8;
      }
      @media (max-width: 600px) {
        .button-group {
          flex-direction: column;
          align-items: center;
        }
        .btn {
          width: 100%;
          max-width: 250px;
          margin-bottom: 10px;
        }
      }
    </style>
  `;

  let serviceText = '';
  let typeText = '';

  switch (data.type) {
    case 'callback':
      typeText = 'call back request';
      serviceText = 'We\'ll call you back at your preferred time to discuss your pressure washing needs.';
      break;
    case 'quote':
      typeText = 'quote request';
      serviceText = data.service 
        ? `We'll prepare a detailed estimate for your ${data.service.toLowerCase()} project.`
        : 'We\'ll prepare a detailed estimate for your pressure washing project.';
      break;
    case 'contact':
      typeText = 'contact form submission';
      serviceText = data.service 
        ? `We're excited to help you with your ${data.service.toLowerCase()} needs.`
        : 'We\'re excited to help you with your pressure washing needs.';
      break;
  }

  const phoneNumber = '13173504926';

  return `
    ${baseStyles}
    <div class="container">
      <div class="header">
        <h1>Brownsburg Pressure Washing</h1>
      </div>
      
      <div class="content">
        <div class="greeting">
          Hi, ${data.name}! 👋
        </div>
        <br>
        <div class="message">
          Thank you for your ${typeText}! We've received your information and are excited to help transform your property.
        </div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />

        ${data.service ? `
          <div class="service-info">
            <strong>Service Requested:</strong> ${data.service}
            <br>
            ${serviceText}
          </div>
        ` : `
          <div class="service-info">
            ${serviceText}
          </div>
        `}

        <div class="cta-section">
          <div class="cta-title">Need immediate assistance?</div>
          <p style="margin-bottom: 20px; color: #64748b;">
            Don't wait! Call or text us now if this is urgent!:
          </p>
          
          <div class="button-group">
            <a href="tel:+${phoneNumber}" class="btn btn-primary">
              (317) 350-4926
            </a>
          </div>
        </div>

        <div class="message">
          <br>
          <strong>What happens next?</strong>
          <ul style="margin: 15px 0; padding-left: 20px;">
            <li>We'll review your request ASAP!</li>
            <li>Contact you to schedule your free estimate</li>
            <li>Provide a detailed quote with no hidden fees</li>
            <li>Answer any questions about our services</li>
          </ul>
        </div>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        
        <div class="message">
          We appreciate your business and look forward to making your property shine! ✨
        </div>
      </div>

      <div class="footer">
        <div class="company-name">
          <br>
          <strong>Brownsburg Pressure Washing</strong>
        </div>
        <div class="company-tagline">
          Professional Pressure Washing Services
        </div>
        <div class="company-info">
          📧 Email: service@brownsburgpressurewashing.com<br>
          📞 Phone: (317) 350-4926<br>
          🌐 Website: brownsburgpressurewashing.com<br>
          📍 Serving all Hendricks, Marion, & Hamilton County Townships in Indiana
        </div>
      </div>
    </div>
  `;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    // Parse the request body
    const data: ConfirmationRequest = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and phone are required' }),
        { 
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Generate confirmation email content
    const emailHTML = generateConfirmationHTML(data);
    
    let subject = '';
    switch (data.type) {
      case 'callback':
        subject = `Thanks ${data.name}! We'll call you back soon - Brownsburg Pressure Washing`;
        break;
      case 'quote':
        subject = `Thanks ${data.name}! Your free quote is coming - Brownsburg Pressure Washing`;
        break;
      case 'contact':
        subject = `Thanks ${data.name}! We received your message - Brownsburg Pressure Washing`;
        break;
    }

    // Send confirmation email to customer
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Brownsburg Pressure Washing <noreply@brownsburgpressurewashing.com>',
        to: data.email,
        subject: subject,
        html: emailHTML
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', errorText);
      
      return new Response(
        JSON.stringify({ error: 'Failed to send confirmation email' }),
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
    console.error('Confirmation email sending error:', error);
    
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