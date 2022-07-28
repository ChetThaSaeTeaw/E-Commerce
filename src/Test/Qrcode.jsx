import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import generatePayload from 'promptpay-qr';


function Qrcode() {

  const [ qr , setQR ] = useState(false);
  const storeNumber = "080-680-8594";
  const amount = 5;

  const payload = generatePayload(storeNumber , { amount : amount });

  return (
    <div>
        <h1>QR Code Payment</h1>
        {qr === false ?   <button onClick={() => setQR(true)}>Generate QR Code</button> :   <button>Scan</button> }
        {!qr ? null : <QRCodeSVG value={payload} /> }
    </div>
  )
}

export default Qrcode
