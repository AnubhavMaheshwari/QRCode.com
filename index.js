const qrCodeContainer = document.getElementById('qr-code');
    const countdownElement = document.getElementById('countdown');

    const generateRandomData=()=>{
        // https://www.linkedin.com/in/anubhav-maheshwari-98b381271 for link of linked in 

      return ` https://www.linkedin.com/in/anubhav-maheshwari-98b381271/?id=${Math.random().toString(36).substr(2, 8)}`;
    };

    const updateQRCode = () => {
      const qrData = generateRandomData();
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=200x200`;

      qrCodeContainer.src = apiUrl;
      console.log(`QR Code updated with data: ${qrData}`);
    };

    const startCountdown = () => {
      let counter = 5;
      const interval = setInterval(() => {
        counter--;
        // countdownElement.textContent = counter;

        if (counter <= 0) {
          clearInterval(interval);
          updateQRCode();
          startCountdown();
        }
      }, 1000);
    };
    updateQRCode();
    startCountdown();
