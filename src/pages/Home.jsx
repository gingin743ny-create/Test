import React from 'react';
import katex from 'katex';
// นำเข้าไฟล์ CSS ของ KaTeX เพื่อให้สูตรแสดงผลสวยงาม
import 'katex/dist/katex.min.css';

function Home() {
  // สูตร BMI เขียนด้วยรูปแบบ LaTeX
  const formula = "\\text{ดัชนีมวลกาย (BMI)} = \\frac{\\text{น้ำหนัก (kg)}}{\\text{ส่วนสูง (m)}^2}";

  // แปลงสูตรให้เป็น HTML เพื่อนำไปแสดงผล
  const htmlString = katex.renderToString(formula, {
    throwOnError: false,
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>การคำนวณดัชนีมวลกาย</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>
        สูตรที่ใช้ในการคำนวณหาค่า BMI คือ:
      </p>

      {/* กล่องแสดงผลสูตรคณิตศาสตร์ด้วย KaTeX */}
      <div 
        style={{ 
          fontSize: '24px', 
          margin: '30px auto', 
          padding: '20px', 
          background: '#ffffff', 
          display: 'inline-block',
          borderRadius: '10px'
        }}
        dangerouslySetInnerHTML={{ __html: htmlString }} 
      />
    </div>
  );
}

export default Home;