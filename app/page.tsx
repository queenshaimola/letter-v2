import Link from 'next/link';

export default function WelcomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body, html { width: 100%; height: 100vh; overflow: hidden; display: flex; justify-content: center; align-items: center; font-family: 'Poppins', sans-serif; }
        
        #bg-video { position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; object-fit: cover; z-index: -2; }
        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); z-index: -1; }
        
        .welcome-screen { text-align: center; z-index: 1; display: flex; flex-direction: column; align-items: center; width: 100%; padding: 0 15px; }
        .title-container { margin-bottom: 30px; text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); line-height: 1.1; width: 100%; }
        
        /* Menyesuaikan rentang clamp agar lebih aman di layar HP kecil */
        .title-top { font-size: clamp(2rem, 8vw, 4.5rem); color: #F4D03F; display: flex; align-items: baseline; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .font-alex { font-family: 'Alex Brush', cursive; font-size: clamp(2.5rem, 10vw, 5rem); }
        .font-amatic { font-family: 'Amatic SC', cursive; font-weight: 700; font-size: clamp(3rem, 11vw, 6rem); letter-spacing: 2px; }
        .title-bottom { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: clamp(1.8rem, 7vw, 3.5rem); font-weight: 700; color: #F4D03F; letter-spacing: 3px; text-transform: lowercase; margin-top: -5px; }
        
        .btn-lanjutkan {
            display: inline-block;
            text-decoration: none;
            background-color: rgba(135, 206, 250, 0.35);
            color: #ffffff;
            border: 2px solid #87CEFA;
            padding: 12px 35px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            backdrop-filter: blur(6px);
            box-shadow: 0 4px 15px rgba(135, 206, 250, 0.3);
            transition: all 0.3s ease;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        .btn-lanjutkan:hover {
            background-color: #87CEFA;
            color: #1a1a1a;
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(135, 206, 250, 0.6);
        }
      `}} />

      {/* Import Font Google */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Amatic+SC:wght@700&family=Poppins:wght@400;600&display=swap" 
        rel="stylesheet" 
      />

      {/* Background Video */}
      <video autoPlay muted loop playsInline id="bg-video">
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>

      {/* Cover Content */}
      <div className="welcome-screen">
        <div className="title-container">
          <div className="title-top">
            <span className="font-alex">The</span>
            <span className="font-amatic">COUNTLESS</span>
          </div>
          <div className="title-bottom">
            <span>words</span>
          </div>
        </div>
        
        {/* Tombol mengarahkan langsung ke halaman /letter */}
        <Link href="/letter" className="btn-lanjutkan">
          Here
        </Link>
      </div>
    </>
  );
}