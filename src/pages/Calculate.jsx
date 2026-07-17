import React from 'react';
import { Input, Button } from 'antd'; 

function Calculate({ weight, setWeight, height, setHeight, result, setResult }) {
  
  const calculateBMI = () => {
    const w = parseFloat(weight); 
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      // แปลงเซนติเมตรเป็นเมตรก่อนคำนวณ (หาร 100)
      const heightInMeters = h / 100;
      const bmi = w / (heightInMeters * heightInMeters);
      setResult(bmi.toFixed(2)); 
    } else {
      setResult("กรุณากรอกตัวเลขให้ถูกต้อง");
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>โปรแกรมคำนวณดัชนีมวลกาย</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>น้ำหนัก (กิโลกรัม):</label>
        <Input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          placeholder="เช่น 60" 
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>ส่วนสูง (เซนติเมตร):</label>
        <Input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
          placeholder="เช่น 170" 
        />
      </div>

      <Button type="primary" onClick={calculateBMI} block size="large">
        คำนวณ BMI
      </Button>

      {result && (
        <div style={{ marginTop: '20px', textAlign: 'center', padding: '15px', backgroundColor: '#e6f4ff', borderRadius: '5px' }}>
          <h3>ผลลัพธ์: {result}</h3>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Input, Button } from 'antd'; 

function Calculate({ weight, setWeight, height, setHeight, result, setResult }) {
  
  const calculateBMI = () => {
    const w = parseFloat(weight); 
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      // แปลงเซนติเมตรเป็นเมตรก่อนคำนวณ (หาร 100)
      const heightInMeters = h / 100;
      const bmi = w / (heightInMeters * heightInMeters);
      setResult(bmi.toFixed(2)); 
    } else {
      setResult("กรุณากรอกตัวเลขให้ถูกต้อง");
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>โปรแกรมคำนวณดัชนีมวลกาย</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>น้ำหนัก (กิโลกรัม):</label>
        <Input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          placeholder="เช่น 60" 
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>ส่วนสูง (เซนติเมตร):</label>
        <Input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
          placeholder="เช่น 170" 
        />
      </div>

      <Button type="primary" onClick={calculateBMI} block size="large">
        คำนวณ BMI
      </Button>

      {result && (
        <div style={{ marginTop: '20px', textAlign: 'center', padding: '15px', backgroundColor: '#e6f4ff', borderRadius: '5px' }}>
          <h3>ผลลัพธ์: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculate;