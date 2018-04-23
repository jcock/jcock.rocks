import instaFeed from 'instafeed.js';

function Instagram() {
    const instagram = new instaFeed({
        clientId: '671a3ccad04148d8b29202685bcaf5ce',
        target: 'instafeed',
        get: 'user',
        userId: 33416005,
        accessToken: '33416005.1677ed0.d060fb89dd774ce0bfd244f1300e8ac3',
        links: true,
        limit: 6,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<li class="grid--feed_item"><a href="{{link}}" class="item--block"><figure class="item--figure"><img src="https://res.cloudinary.com/jcock-rocks/image/fetch/q_auto:low,w_auto,dpr_auto,f_auto,c_scale/https:{{image}}" srcset="https://res.cloudinary.com/jcock-rocks/image/fetch/w_auto,dpr_auto,q_auto:best,f_auto,c_scale/https:{{image}} 576w, https://res.cloudinary.com/jcock-rocks/image/fetch/w_auto,dpr_auto,q_auto:best,f_auto,c_scale/https:{{image}} 768w, https://res.cloudinary.com/jcock-rocks/image/fetch/w_auto,dpr_auto,q_auto:best,f_auto,c_scale/https:{{image}} 992w, https://res.cloudinary.com/jcock-rocks/image/fetch/w_auto,dpr_auto,q_auto:best,f_auto,c_scale/https:{{image}} 1200w, https://res.cloudinary.com/jcock-rocks/image/fetch/w_auto,dpr_auto,q_auto:best,f_auto,c_scale/https:{{image}} 1440w"sizes="(min-width:48em) 16.67vw, 25vw"alt="{{caption}}" class="item--img cld-responsive"/><figcaption class="item--info"><p class="item--meta"><span class="item--meta-likes"><svg class="icn icn--heart" role="img" title="likes"><use xlink:href="/img/sprite.symbol.svg#heart"/></svg>&nbsp;{{likes}}</span><span class="item--meta-comments"><svg class="icn icn--comment" role="img" title="comments"><use xlink:href="/img/sprite.symbol.svg#comment"/></svg>&nbsp;{{comments}}</span></p><p class="ig-name"><svg class="icn icn--instagram" role="img" title="Instagram"><use xlink:href="/img/sprite.symbol.svg#instagram"/></svg>&nbsp;jc0ck</p></figcaption></figure></a></li>'
    });

    if (document.querySelector('#instafeed')) {
        instagram.run();
    }
}

export default Instagram;

// SIZING FOR IMAGES PULLED FROM: https://www.filamentgroup.com/lab/sizes-swap/