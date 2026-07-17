import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';

// 1. นำเข้าหน้า (Pages) ต่างๆ จากโฟลเดอร์ pages ที่เราสร้างไว้
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import FetchApi from './pages/FetchApi';
import NotFound from './pages/NotFound';

function App() {
  // 2. ประกาศ State สำหรับใช้งานในระบบตามที่โจทย์สั่ง
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  // 3. กำหนดปุ่มเมนูสำหรับ Navbar ของ Ant Design (ใส่ Link ครอบเพื่อให้กดเปลี่ยนหน้าได้จริง)
  const menuItems = [
    {
      label: <Link to="/">🏠 หน้าแรก</Link>,
      key: 'home',
    },
    {
      label: <Link to="/calculate">🧮 คำนวณ BMI</Link>,
      key: 'calculate',
    },
    {
      label: <Link to="/fetch">🌐 Fetch API</Link>,
      key: 'fetch',
    },
  ];

  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        {/* 4. ส่วนของ Navbar เมนูบาร์ด้านบนของ Ant Design */}
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{ marginBottom: '30px', fontSize: '16px' }}
        />

        {/* 5. ส่วนแสดงผลเนื้อหาของแต่ละหน้าตาม URL ที่กดเลือก */}
        <div style={{ padding: '0 20px' }}>
          <Routes>
            {/* หน้าแรก */}
            <Route path="/" element={<Home />} />
            
            {/* หน้าคำนวณ: ส่ง State ทั้งหมดไปให้ผ่าน Props */}
            <Route 
              path="/calculate" 
              element={
                <Calculate 
                  weight={weight} 
                  setWeight={setWeight} 
                  height={height} 
                  setHeight={setHeight}
                  result={result}
                  setResult={setResult}
                />
              } 
            />

            {/* หน้า Fetch API */}
            <Route path="/fetch" element={<FetchApi />} />
            
            {/* หน้า 404 กรณีลิงก์ไม่ถูกต้อง */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;