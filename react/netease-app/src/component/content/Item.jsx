import React from 'react';

export default function Item() {
    return (
        <div>
             const itemList = [ 
                {
                "img":"https://a0.muscache.com/im/pictures/prohost-api/Hosting-696191916548468403/original/88873c6c-3809-42e2-9e65-9a6d879325d5.jpeg?im_w=720&im_format=avif",
                "title":"선지자 피규어",
                "price":"14.000",
                "sale": true,                
                },
                   {
                "img":"https://a0.muscache.com/im/pictures/prohost-api/Hosting-696191916548468403/original/88873c6c-3809-42e2-9e65-9a6d879325d5.jpeg?im_w=720&im_format=avif",
                "title":"선지자 피규어",
                "price":"14.000",
                "sale": true,                
                },

            ]
        </div>
    );
}
// 이런식으로 만들면 댕
// sale 이 true 이면 할인된 가격까지 보이게 하는거임 이거 css도 우선 하나 만들어놔봐
// {props.sale && <span class='sale--price'> 10,000 </span>} 
