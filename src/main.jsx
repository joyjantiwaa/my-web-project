import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Header, 
  Footer, 
  Button,
  JpjoyTheme,
  Heading,
  Icon,
  Card,
  Paragraph
} from '@jpjoy-lookmix/lookmix-design-system';
import '@jpjoy-lookmix/lookmix-design-system/dist/index.css'; 
import heroImage from './assets/hero-model.png';
import scan from './assets/scan.png';
import submain from './assets/submain.png';
import daily from './assets/daily.png';
import './app-layout.scss';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
    { label: 'Community', href: '/community' },
  ];

function App() {
  // --- ส่วนที่เพิ่ม: Scroll Reveal Effect ---
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <JpjoyTheme>
      <div className="lm-app-wrapper">
        <Header variant="website" navItems={navItems} action={<Button appearance="outline" size="sm">Download</Button>} />

        <main className="lm-main-content">
          {/* HERO SECTION */}
          <section className="lm-hero-section reveal">
            <div className="lm-hero-container">
              <div className="lm-hero-visual">
                <div className='lm-everydownload-group'>
                  <span className="hero-text-everyday-left">EVERY</span>
                  <div className="lm-hero-download">
                    <Heading level="h1" className="download-title">DOWNLOAD</Heading>
                    <div className="download-buttons">
                      <Button appearance="outline" className="lm-footer-store-btn" external>
                        <Icon icon="mingcute:apple-fill" size={20} />
                        <span>App store</span>
                      </Button>
                      <Button appearance="outline" className="lm-footer-store-btn" external>
                        <Icon icon="mingcute:google-play-fill" size={20} />
                        <span>Google play</span>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="hero-image-wrapper">
                  <img src={heroImage} alt="Hero Fashion" />
                </div>
                
                <div className="hero-text-right-group">
                  <span className="hero-text-day">DAY</span>
                  <span className="hero-text-fashion">FASHION</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mobile-download reveal">
            <div className="lm-hero-download2">
              <Heading level="h1" className="download-title">DOWNLOAD</Heading>
              <div className="download-buttons">
                <Button appearance="outline" className="lm-footer-store-btn" external>
                  <Icon icon="mingcute:apple-fill" size={20} />
                  <span>App store</span>
                </Button>
                <Button appearance="outline" className="lm-footer-store-btn" external>
                  <Icon icon="mingcute:google-play-fill" size={20} />
                  <span>Google play</span>
                </Button>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="lm-feature-section reveal">
            <div className="lm-feature-container">
              <div className="lm-feature-text">
                <span className="feature-step lm-text-body-default">STEP 1</span>
                <Heading level="h1" className="feature-title">Scanning and Data Collection</Heading>
                <p className="feature-body lm-text-body-medium">
                  Use the in-app camera or a connected device to perform a full-body scan. This collects key measurements and characterizes your figure...
                </p>
              </div>
              <div className="lm-feature-image">
                <img src={scan} alt="Scanning process" />
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="lm-feature-section reveal">
            <div className="lm-feature-container">
              <div className="lm-feature-text">
                <span className="feature-step lm-text-body-default">STEP 2</span>
                <Heading level="h1" className="feature-title">Mix and Match, Curating Your Favorite Look</Heading>
                <p className="feature-body lm-text-body-medium">
                  Navigate to the "Mix & Match" studio. The app will use AI to suggest compatible combinations based on your inventory...
                </p>
              </div>
              <div className="lm-feature-image">
                <img src={submain} alt="Outfit analysis" />
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="lm-feature-section reveal">
            <div className="lm-feature-container">
              <div className="lm-feature-text">
                <span className="feature-step lm-text-body-default">STEP 3</span>
                <Heading level="h1" className="feature-title">Saving Your Style and Daily Outfit Plan</Heading>
                <p className="feature-body lm-text-body-medium">
                  After finalizing the Mix & Match outfit, tap "Save Style." Give the style a name (e.g., "Casual Weekend," "Power Meeting")...
                </p>
              </div>
              <div className="lm-feature-image">
                <img src={daily} alt="Daily styling" />
              </div>
            </div>
          </section>

          {/* SECTION card */}
          <section className="lm-explore-section reveal">
            <Heading level="h1">Explore our features</Heading>
            <div className="lm-card-grid">
              <Card variant="glass" title="Mix & Match Builder">
                <Paragraph size="body-small">Create outfits by combining tops, bottoms, and accessories in one place.</Paragraph>
              </Card>
              <Card variant="glass" title="Save Your Style">
                <Paragraph size="body-small">Save your favorite looks with custom names for quick access later.</Paragraph>
              </Card>
              <Card variant="glass" title="Style History">
                <Paragraph size="body-small">View and revisit previously created outfits anytime.</Paragraph>
              </Card>
              <Card variant="glass" title="Smart Suggestions">
                <Paragraph size="body-small">Get outfit recommendations based on your past selections.</Paragraph>
              </Card>
              <Card variant="glass" title="Color Harmony">
                <Paragraph size="body-small">Automatically match colors for a balanced and polished look.</Paragraph>
              </Card>
              <Card variant="glass" title="Occasion Ready">
                <Paragraph size="body-small">Quickly find outfits suitable for work, casual, or special events.</Paragraph>
              </Card>
              <Card variant="glass" title="Quick Edit">
                <Paragraph size="body-small">Modify saved styles without starting from scratch.</Paragraph>
              </Card>
              <Card variant="glass" title="Share Looks">
                <Paragraph size="body-small">Share your outfit ideas with friends or on social media.</Paragraph>
              </Card>
              <Card variant="glass" title="Cloud Sync">
                <Paragraph size="body-small">Access your saved styles across devices seamlessly.</Paragraph>
              </Card>
            </div>
          </section>
          
          {/* CALL TO ACTION */}
          <section className="reveal">
            <div className="call-to-action">
              <p className="action-title">Ready to transform your style?</p>
              <p className="action-subtitle">START YOUR JOURNEY TODAY</p>
              <div className="download-buttons">
                <Button appearance="outline" className="lm-footer-store-btn" external>
                  <Icon icon="mingcute:apple-fill" size={20} />
                  <span>App store</span>
                </Button>
                <Button appearance="outline" className="lm-footer-store-btn" external>
                  <Icon icon="mingcute:google-play-fill" size={20} />
                  <span>Google play</span>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </JpjoyTheme>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);