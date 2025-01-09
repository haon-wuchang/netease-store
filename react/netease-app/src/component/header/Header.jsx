import React from 'react';

export default function Header() {
    return (
        <header>
            <div class="width">        
                <div class="header--top">
                    <div class="header--top--logo">
                        <LogoList />
                    </div> 
                    <div class="header--top--middle">
                        Crimson/Noir PRE-ORDER from December 12 2024 to January 24 2025
                    </div>
                    <div class="header--top--right">
                            <select name="" class="select1">
                                <option value="korea">South Korea (KRW ￦)</option>
                                <option value="canada">United States (USD $)</option>
                                <option value="china">China (CNY ¥)</option>
                                <option value="japan">Russia (USD $)</option>
                                <option value="usa">Serbia (RSD)</option>
                                <option value="Germany">Uzbekistan (UZS)</option>
                            </select>
                            <select name="language" class="select2">
                                <option value="english">English</option>
                                <option value="chinese">中文</option>
                                <option value="japanese">日本语</option>
                            </select>
                    </div>
                </div>
                <div class="header--bottom">
                    <a href="#" class="header--title">NetEase Store</a>
                    {/* <HeaderMenu /> */}
                    <div class="header--bottom--right--logo">
                        {/* <LogoList /> */}
                    </div>
                </div> 
            </div>
        </header>
    );
}

