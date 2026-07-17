import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    // สร้างตัวนับเวลาถอยหลังทุกๆ 1 วินาที
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // ตั้งเวลาให้ Redirect ไปที่หน้า Home ("/") เมื่อครบ 7 วินาที
    const timeout = setTimeout(() => {
      navigate('/');
    }, 7000);

    // ล้างการตั้งเวลาออกเมื่อย้ายหน้าแล้ว หรือถูกทำลาย
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '50px', color: '#ff4d4f', margin: '0' }}>404</h1>
      <h2>Page Not Found</h2>
      
      <p style={{ fontSize: '18px', marginTop: '30px', color: '#555' }}>
        กำลังเปลี่ยนเส้นทางไปยังหน้าหลักในอีก <strong style={{ fontSize: '24px', color: '#1677ff' }}>{countdown}</strong> วินาที...
      </p>
    </div>
  );
}

export default NotFound;