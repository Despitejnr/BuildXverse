import React from 'react';
import './Customers.css';
import { Linkedin, Twitter } from 'lucide-react';

function Customers() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer>
      <div className="container mx-auto text-center">
        <div className="namesx">
        <p>&copy; {currentYear} BuildXverse. All rights reserved.</p>
        </div>
        
        <div className="symbol">
        <p>
          Follow us on{' '}
          <a href="#" className="text-blue-400 hover:underline">
            <Twitter className="inline-block" /> Twitter
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-400 ">
            <Linkedin className="inline-block" /> LinkedIn
          </a>
        </p>
        </div>
      </div>
    </footer>
  );
}

export default Customers;