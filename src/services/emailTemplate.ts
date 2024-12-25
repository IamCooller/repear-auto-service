export function getEmailTemplate({
  FullName,
  phone,
  email,
  comments,
  vin,
  title
}: {
  FullName: string;
  phone: string;
  email: string;
  comments: string;
  vin: string | undefined;
  title: string;
}) {
  return `
<html>
<head>
  <style>
    .body {
      font-family: Montserrat, sans-serif;
      margin: 0;
      padding: 0;
      border-radius: 35px;
      border: 1px solid #495B6E;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #495B6E;
    }
    .header h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
    }
    .content {
      padding: 20px;
    }
    .footer {
      padding: 20px;
      text-align: center;
      font-size: 12px;
    }
  </style>
</head>
<body>
<div class="body">
  <div class="container">
    <div class="header">
      <h1>${title || 'Contact Form'}</h1>
    </div>
    <div class="content">
      <p><strong>Name:</strong> ${FullName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${vin ? `<p><strong>VIN:</strong> ${vin}</p>` : ''}
      ${comments ? `<p><strong>Comments:</strong> ${comments}</p>` : ''}
    </div>
  </div>
</div>
</body>
</html>


`;
}
