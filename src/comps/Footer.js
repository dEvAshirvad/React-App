import React from 'react'
import Logo from '../assets/logo.png';

function Footer() {
  return (
   <>
     <footer class="footer-01">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-4">
                        <aside class="widget about-widget">
                            <div class="foo-logo">
                                <a href="index.html"><img src={Logo} alt=""/></a>
                            </div>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus er sit voluptatem accusantium dolore.ea commo
                                do consequat. Duis aute irure dolor in re
                                prehenderit in. 
                            </p>
                            <div class="ab-social">
                                <a href="#"><i class="twi-facebook"></i></a>
                                <a href="#"><i class="twi-twitter"></i></a>
                                <a href="#"><i class="twi-instagram"></i></a>
                                <a href="#"><i class="twi-linkedin"></i></a>
                            </div>
                        </aside>
                    </div>
                    <div class="col-lg-2 col-md-4 col-custome-1">
                        <aside class="widget">
                            <h3 class="widget-title">Useful Links</h3>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div class="col-lg-2 col-md-4 col-custome-2">
                        <aside class="widget">
                            <h3 class="widget-title">Account</h3>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Log in</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Purchases</a></li>
                                <li><a href="#">Shipping Address</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div class="col-lg-2 col-md-6 col-custome-3">
                        <aside class="widget contact-widget">
                            <h3 class="widget-title">Contact</h3>
                            <p>
                                123 Street, Gandy Street, Syracuse
                                New York - 13221.
                            </p>
                            <p>
                                Phone: +1 315-234-3812
                                Email: info@goru.com
                            </p>
                        </aside>
                    </div>
                    <div class="col-lg-3 col-md-6 col-custome-4">
                        <aside class="widget">
                            <h3 class="widget-title">Subscribe</h3>
                            <form class="subscribe-form" action="#" method="post">
                                <input type="email" name="email" placeholder="admin@mail.com"/>
                                <button type="submit">Subscribe<i class="twi-long-arrow-alt-right"></i></button>
                            </form>
                        </aside>
                    </div>
                </div>
            </div>
        </footer>
        <section class="copyright-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-5">
                        <ul class="menu-link">
                           <li><a href="#">Privacy Policy</a></li> | 
                           <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-7">
                        <div class="copys-text"><i class="twi-copyright"></i>Copyright WpSmasher 2020 | All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default Footer