'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://backend-gamma-fawn.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'การเข้าสู่ระบบล้มเหลว');
      }

      const { token } = await res.json();
      localStorage.setItem('authToken', token);
      
      // กระตุ้นเหตุการณ์ storage เพื่ออัปเดต Navbar
      window.dispatchEvent(new Event('storage'));

      // เปลี่ยนเส้นทางไปยังหน้า home
      router.push('/users');
    } catch (error) {
      console.error('ข้อผิดพลาดระหว่างการเข้าสู่ระบบ:', error);
      setError(error.message || 'การเข้าสู่ระบบล้มเหลว โปรดตรวจสอบข้อมูลการเข้าสู่ระบบและลองอีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-primary text-white">
          ฟอร์มเข้าสู่ระบบ
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">ชื่อผู้ใช้</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">รหัสผ่าน</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
