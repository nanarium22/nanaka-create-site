// src/components/Layout.jsx
import React from 'react';
import Header from './Header';          // ハンバーガーメニューがあるHeader
import ModalMenu from './ModalMenu';    // モーダルメニュー
import './Layout.css';                  // 必要ならレイアウト用CSS

function Layout({ children }) {
  return (
    <div>
      <Header />
      <ModalMenu />
      <main>{children}</main>
    </div>
  );
}

export default Layout;