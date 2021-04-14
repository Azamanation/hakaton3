import React from 'react';

const Hblock = () => {
    return (
       
        <div className="header">
        <div className="header__logo">maker<span className="header__white-s">s</span><span className="header__yellow-documentation">Documentation</span></div>
        <nav>
            <div className="header__topnav">
                <a href="http://makers.kg">Главная</a>
                <a href="http://makers.kg">Документация</a>
                <a href="http://makers.kg">Добавить</a>
                <input type="text" className="placeholder-bg-yellow" placeholder="  Поиск"/>
                <div className="header__github-text">GitHub</div>
                
            </div>

        </nav>


    </div>
         
        
    );
};

export default Hblock;