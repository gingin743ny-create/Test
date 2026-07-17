import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Spin } from 'antd';

const { Meta } = Card;

function FetchApi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
        🛍️ รายการสินค้าจาก API
      </h2>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spin size="large" tip="กำลังโหลดข้อมูล..." />
        </div>
      ) : (
        /* ใช้ Row และ Col จัดเป็น 3 คอลัมน์ (md={8} เพราะ 24/8 = 3) */
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col xs={24} sm={12} md={8} key={product.id} style={{ display: 'flex', justifyContent: 'center' }}>
              
              {/* โครงสร้าง Card ตามที่นายกำหนดมาเป๊ะๆ */}
              <Card
                hoverable
                variant="borderless"
                style={{ width: 240, marginBottom: '20px', border: '1px solid #f0f0f0' }}
                cover={
                  <img
                    draggable={false}
                    alt={product.title}
                    src={product.image}
                    /* เพิ่ม style ให้รูปไม่เพี้ยนเวลาดึงจาก API */
                    style={{ height: '200px', objectFit: 'contain', padding: '15px' }}
                  />
                }
              >
                <Meta 
                  title={product.title} 
                  description={`ราคา: $${product.price}`} 
                />
              </Card>

            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default FetchApi;