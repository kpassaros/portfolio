(()=>{
  'use strict';
  const root=document.documentElement;
  const q=(selector,scope=document)=>scope.querySelector(selector);
  const qa=(selector,scope=document)=>[...scope.querySelectorAll(selector)];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

  function chrome(){
    const theme=q('.theme-toggle');
    if(theme)theme.addEventListener('click',()=>{
      root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
      localStorage.setItem('portfolio-theme',root.dataset.theme);
    });
    const toggle=q('.menu-toggle'),links=q('.nav-links');
    if(toggle&&links)toggle.addEventListener('click',()=>{
      const open=links.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    const search=q('#catalog-search'),filterBar=q('#catalog-filters'),empty=q('#catalog-empty');
    if(search){
      let activeFilter='all';
      const normalize=value=>(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
      const applyCatalogFilters=()=>{
        const term=normalize(search.value.trim());
        let visible=0;
        qa('[data-search]').forEach(card=>{
          const matchesSearch=normalize(card.dataset.search).includes(term);
          const filters=normalize(card.dataset.filters);
          const matchesFilter=activeFilter==='all'||filters.includes(activeFilter);
          card.hidden=!(matchesSearch&&matchesFilter);
          if(!card.hidden)visible++;
        });
        if(empty)empty.hidden=visible>0;
      };
      search.addEventListener('input',applyCatalogFilters);
      qa('[data-filter]',filterBar||document).forEach(button=>button.addEventListener('click',()=>{
        activeFilter=button.dataset.filter||'all';
        qa('[data-filter]',filterBar||document).forEach(item=>item.classList.toggle('active',item===button));
        applyCatalogFilters();
      }));
      applyCatalogFilters();
    }
    qa('.case-index a').forEach(a=>a.addEventListener('click',()=>{
      qa('.case-index a').forEach(x=>x.classList.toggle('active',x===a));
    }));
    qa('.datastudio-frame iframe').forEach(frame=>{
      const wrapper=frame.parentElement;
      let armed=false,lastStableScroll=window.scrollY,tracker=0;
      const remember=()=>{lastStableScroll=window.scrollY};
      wrapper?.addEventListener('pointerenter',()=>{
        armed=true;remember();
        tracker=window.setInterval(remember,120);
      });
      wrapper?.addEventListener('pointerleave',()=>{
        armed=false;
        if(tracker)window.clearInterval(tracker);
      });
      frame.addEventListener('focus',()=>{armed=true;remember()});
      frame.addEventListener('load',()=>{
        wrapper?.querySelector('.dashboard-loading')?.remove();
        if(!armed)return;
        const expected=lastStableScroll;
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
          if(Math.abs(window.scrollY-expected)>2)window.scrollTo({top:expected,left:window.scrollX,behavior:'auto'});
        }));
      });
    });
    const contact=q('.contact-form');
    if(contact)contact.addEventListener('submit',async event=>{
      event.preventDefault();
      const button=q('.submit-button',contact),status=q('.form-status',contact);
      if(button)button.disabled=true;if(status)status.textContent='Enviando…';
      try{
        const response=await fetch(contact.action,{method:'POST',body:new FormData(contact),headers:{Accept:'application/json'}});
        if(!response.ok)throw new Error('Falha no envio');
        contact.reset();if(status)status.textContent='Mensagem enviada com sucesso.';
      }catch{if(status)status.textContent='Não foi possível enviar. Use o e-mail disponível ao lado.'}
      finally{if(button)button.disabled=false}
    });
  }

  function createNeuralNetwork(canvas,intro=false){
    const ctx=canvas.getContext('2d');
    let width=0,height=0,dpr=1,nodes=[],edges=[],focusEdges=[],pulses=[];
    let stage=intro?'intro':'ambient',transitionStart=performance.now(),lastPulse=0,nextPulse=1100;
    let pointer={x:-999,y:-999},seed=19790517,animationFrame=0;
    const seeded=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
    const range=(min,max)=>min+seeded()*(max-min);
    const clamp=value=>Math.max(0,Math.min(1,value));
    const ease=value=>value<.5?4*value*value*value:1-Math.pow(-2*value+2,3)/2;

    function build(preserveStage=true){
      const oldWidth=width||innerWidth,oldHeight=height||innerHeight;
      width=innerWidth;height=innerHeight;dpr=Math.min(devicePixelRatio||1,2);seed=19790517;
      canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
      canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const total=width<650?52:88,margin=width<650?28:58,cx=width/2,cy=height/2;
      nodes=Array.from({length:total},(_,index)=>{
        const layer=index%2,position=Math.floor(index/2),layerTotal=Math.ceil(total/2);
        const angle=(position/layerTotal)*Math.PI*2+(layer?.055:0),ring=width<650?(layer?112:78):(layer?154:108);
        const fx=range(margin,Math.max(margin+1,width-margin));
        const fy=range(margin,Math.max(margin+1,height-margin));
        return {fx,fy,x:fx,y:fy,sx:fx,sy:fy,r:range(1.25,2.45),phase:range(0,7),delay:range(0,.72)};
      });
      focusEdges=[];
      [0,1].forEach(layer=>{
        const ringNodes=nodes.filter((_,index)=>index%2===layer);
        ringNodes.forEach((node,index)=>focusEdges.push({a:node,b:ringNodes[(index+1)%ringNodes.length]}));
      });
      for(let index=0;index<nodes.length;index+=10){
        const pair=index%2===0?index+1:index-1;if(nodes[pair])focusEdges.push({a:nodes[index],b:nodes[pair]});
      }
      edges=[];
      nodes.forEach((node,index)=>{
        nodes.map((other,otherIndex)=>({otherIndex,distance:Math.hypot(other.fx-node.fx,other.fy-node.fy)}))
          .filter(item=>item.otherIndex!==index)
          .sort((a,b)=>a.distance-b.distance)
          .slice(0,width<650?3:3)
          .forEach(item=>{
            const a=Math.min(index,item.otherIndex),b=Math.max(index,item.otherIndex);
            if(item.distance<(width<650?205:265)&&!edges.some(edge=>edge.aIndex===a&&edge.bIndex===b)){
              edges.push({aIndex:a,bIndex:b,a:nodes[a],b:nodes[b]});
            }
          });
      });
      pulses=[];
      if(!preserveStage&&stage!=='intro')stage='ambient';
      if(oldWidth!==width||oldHeight!==height)transitionStart=performance.now();
    }

    function launch(amount=3,strong=false){
      for(let index=0;index<amount&&edges.length;index++){
        const edge=edges[Math.floor(seeded()*edges.length)],reverse=seeded()>.5;
        pulses.push({a:reverse?edge.b:edge.a,b:reverse?edge.a:edge.b,t:range(-.12,.08),speed:range(strong?.012:.005,strong?.019:.008),strong});
      }
    }

    function burstAt(x,y){
      if(!edges.length)return;
      const ordered=edges.map(edge=>{
        const da=Math.hypot(edge.a.x-x,edge.a.y-y),db=Math.hypot(edge.b.x-x,edge.b.y-y);
        return {edge,distance:Math.min(da,db),reverse:db<da};
      }).sort((a,b)=>a.distance-b.distance).slice(0,width<650?13:20);
      ordered.forEach((item,index)=>{
        const a=item.reverse?item.edge.b:item.edge.a,b=item.reverse?item.edge.a:item.edge.b;
        pulses.push({a,b,t:-index*.035,speed:.018,strong:true});
      });
    }

    function expand(){
      if(stage!=='intro')return;
      stage='expanding';transitionStart=performance.now();launch(10,true);
    }

    function setAmbient(){
      stage='ambient';
      nodes.forEach(node=>{node.x=node.fx;node.y=node.fy});
      launch(5);
    }

    function draw(now){
      ctx.clearRect(0,0,width,height);
      const rgb=getComputedStyle(root).getPropertyValue('--star').trim()||'105,169,238';
      const expansion=stage==='expanding'?clamp((now-transitionStart)/950):stage==='ambient'?1:0;
      const introAge=clamp((now-transitionStart)/520);
      nodes.forEach(node=>{
        if(stage==='expanding'){
          const local=ease(clamp((expansion-node.delay*.18)/(.82-node.delay*.18+.001)));
          node.x=node.sx+(node.fx-node.sx)*local;
          node.y=node.sy+(node.fy-node.sy)*local;
        }else if(stage==='ambient'){
          const targetX=node.fx+Math.sin(now*.00013+node.phase)*2.4;
          const targetY=node.fy+Math.cos(now*.0001+node.phase)*2.4;
          node.x+=(targetX-node.x)*.055;node.y+=(targetY-node.y)*.055;
        }
      });
      if(stage==='expanding'&&expansion>=1)stage='ambient';
      const targetOpacity=stage==='ambient'?.075:stage==='expanding'?.075*ease(expansion):0;
      if(targetOpacity>0)edges.forEach(edge=>{
        const near=stage==='ambient'&&Math.hypot((edge.a.x+edge.b.x)/2-pointer.x,(edge.a.y+edge.b.y)/2-pointer.y)<190;
        ctx.beginPath();ctx.moveTo(edge.a.x,edge.a.y);ctx.lineTo(edge.b.x,edge.b.y);
        ctx.lineWidth=near?1.25:.62;
        ctx.strokeStyle=`rgba(${rgb},${near?.23:targetOpacity})`;ctx.stroke();
      });
      nodes.forEach(node=>{
        const reveal=stage==='intro'?clamp((introAge-node.delay)/.24):1;
        const near=stage==='ambient'&&Math.hypot(node.x-pointer.x,node.y-pointer.y)<170;
        ctx.beginPath();ctx.arc(node.x,node.y,node.r+(near?.45:0),0,Math.PI*2);
        ctx.fillStyle=`rgba(${rgb},${(near?.82:.42)*reveal})`;
        ctx.shadowColor=`rgba(${rgb},.55)`;ctx.shadowBlur=near?9:2;ctx.fill();ctx.shadowBlur=0;
      });
      if(stage==='ambient'&&!reduced&&now-lastPulse>nextPulse){launch(Math.floor(range(2,5)));lastPulse=now;nextPulse=range(1000,1700)}
      pulses=pulses.filter(pulse=>{
        pulse.t+=pulse.speed;
        const t=Math.max(0,pulse.t),tail=Math.max(0,t-(pulse.strong?.16:.08));
        ctx.beginPath();
        ctx.moveTo(pulse.a.x+(pulse.b.x-pulse.a.x)*tail,pulse.a.y+(pulse.b.y-pulse.a.y)*tail);
        ctx.lineTo(pulse.a.x+(pulse.b.x-pulse.a.x)*t,pulse.a.y+(pulse.b.y-pulse.a.y)*t);
        ctx.lineWidth=pulse.strong?2.3:1.3;ctx.strokeStyle=`rgba(${rgb},${pulse.strong?.88:.58})`;
        ctx.shadowColor=`rgba(${rgb},.8)`;ctx.shadowBlur=pulse.strong?12:6;ctx.stroke();ctx.shadowBlur=0;
        return pulse.t<1.03;
      });
      animationFrame=requestAnimationFrame(draw);
    }

    addEventListener('resize',()=>build(true),{passive:true});
    addEventListener('pointermove',event=>{pointer.x=event.clientX;pointer.y=event.clientY},{passive:true});
    addEventListener('pointerleave',()=>{pointer={x:-999,y:-999}});
    addEventListener('pointerdown',event=>{
      if(stage!=='ambient'||event.target.closest?.('button,a,input,select,textarea'))return;
      pointer={x:event.clientX,y:event.clientY};burstAt(pointer.x,pointer.y);
    });
    build();if(!intro)launch(4);animationFrame=requestAnimationFrame(draw);
    return {expand,setAmbient,destroy:()=>cancelAnimationFrame(animationFrame)};
  }

  function initBackground(){
    const loader=q('#page-loader');
    if(!loader){
      const canvas=q('#starfield');if(canvas)createNeuralNetwork(canvas,false);
      return;
    }
    const canvas=q('#loader-network',loader);
    if(!canvas){releaseLoader(loader);return}
    const video=q('.approved-loader-video',loader);
    const network=createNeuralNetwork(canvas,true);
    let completed=false;
    const finish=()=>{
      if(completed)return;
      completed=true;
      loader.classList.add('is-handoff');
      network.setAmbient();
      setTimeout(()=>{
        canvas.id='starfield';
        document.body.insertBefore(canvas,loader);
        document.body.classList.add('content-ready');
        releaseLoader(loader);
      },480);
    };
    setTimeout(()=>{loader.classList.add('is-expanding');network.expand()},reduced?50:180);
    if(reduced){
      if(video)video.pause();
      setTimeout(finish,520);
      return;
    }
    if(!video){setTimeout(finish,4000);return}
    video.addEventListener('ended',finish,{once:true});
    video.play().catch(()=>setTimeout(finish,4000));
    setTimeout(finish,4600);
  }

  function initCareerTimeline(){
    const timeline=q('#career-timeline');
    if(!timeline)return;
    const entries=qa('.career-entry',timeline);
    let ticking=false;
    const update=()=>{
      const rect=timeline.getBoundingClientRect();
      const viewport=window.innerHeight||document.documentElement.clientHeight;
      const start=viewport*.78;
      const travel=Math.max(rect.height,1);
      const progress=Math.max(0,Math.min(1,(start-rect.top)/travel));
      timeline.style.setProperty('--progress',`${(progress*100).toFixed(2)}%`);
      entries.forEach(entry=>{
        const itemRect=entry.getBoundingClientRect();
        if(itemRect.top<viewport*.84&&itemRect.bottom>viewport*.08)entry.classList.add('visible');
      });
      ticking=false;
    };
    const requestUpdate=()=>{
      if(ticking)return;
      ticking=true;
      requestAnimationFrame(update);
    };
    addEventListener('scroll',requestUpdate,{passive:true});
    addEventListener('resize',requestUpdate,{passive:true});
    update();
  }

  function releaseLoader(loader){
    if(!loader||!loader.isConnected)return;
    loader.classList.add('is-complete');
    document.body.classList.remove('loader-active','home-loading');
    setTimeout(()=>loader.remove(),700);
  }

  function pageTransitions(){
    const elements=[q('main'),q('#site-footer')].filter(Boolean),enter=reduced?120:320;
    if(!document.body.classList.contains('home-loading'))elements.forEach((element,index)=>element.animate([{opacity:0,transform:reduced?'none':'translateY(8px)'},{opacity:1,transform:'none'}],{duration:enter+index*40,easing:'cubic-bezier(.22,.72,.18,1)',fill:'both'}));
  }

  function character(){
    const video=q('#hero-character');if(!video)return;
    if(reduced){video.pause();video.currentTime=0;return}
    video.muted=true;video.play().catch(()=>{});
  }

  chrome();initBackground();initCareerTimeline();pageTransitions();character();
})();
