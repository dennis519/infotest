const earth = document.getElementsByClassName("earth");
      const titleTag = document.getElementsByClassName("tag");
      const title = document.getElementsByClassName('title');
      const box = document.getElementsByClassName('box');
      const ans = document.getElementsByClassName('ans');
      const checkbox = document.querySelectorAll("input[type=radio]");
      const corbox = document.getElementsByClassName('correct');
      const sub = document.getElementsByClassName('link_border');
      const corNum = document.getElementById('cornum');
      const wrNum = document.getElementById('wrnum');
      const Closee = document.getElementsByClassName("close");
      const resWindow = document.getElementsByClassName('resultWindow');
      const moreInfo = document.getElementById('moreInfo');
      const que1 = document.getElementById('que1');
      const adv1 = document.getElementById('adv1');
      console.log(corNum ,wrNum ,resWindow,Closee);
      function checkAns(){
          let correct = 0;
          let wrong;
          let que = [];
          let adv = [];
          for(let i=0;i<corbox.length;i++){
              if(corbox[i].checked){
                  correct ++;
                  wrong = 13-correct;
              }
              else{
                que.push(i+1);
              }
          }
          for(let i=0;i<que.length;i++){
              switch(que[i]){
                  case 1: 
                    if(!adv.includes('<a href="../infopage/infopage.html" target="_blank" rel="noopener noreferrer">訊息設計</a>')){
                        adv.push('<a href="../infopage/infopage.html" target="_blank" rel="noopener noreferrer">訊息設計</a>');
                    };
                    break;
                  case 2: 
                    if(!adv.includes('<a href="../infopage/infopage.html" target="_blank" rel="noopener noreferrer">訊息設計</a>')){
                        adv.push('<a href="../infopage/infopage.html" target="_blank" rel="noopener noreferrer">訊息設計</a>');
                    };
                    break;
                  case 3:
                    if(!adv.includes('<br><a href="../colorpage/colorpage.html" target="_blank" rel="noopener noreferrer">色彩運用</a>')){
                        adv.push('<br><a href="../colorpage/colorpage.html" target="_blank" rel="noopener noreferrer">色彩運用</a>');
                    };
                    break;
                  case 4:
                    if(!adv.includes('<br><a href="../colorpage/colorpage.html" target="_blank" rel="noopener noreferrer">色彩運用</a>')){
                        adv.push('<br><a href="../colorpage/colorpage.html" target="_blank" rel="noopener noreferrer">色彩運用</a>');
                    };
                    break;
                  case 5:
                    if(!adv.includes('<br><a href="../colorpage/colorpage.html" target="_blank" rel="noopener noreferrer">色彩運用</a>')){
                        adv.push('<br><a href="../colorpage/colorpage.html" target="_blank" rel="noopener noreferrer">色彩運用</a>');
                    };
                    break;
                  case 6:
                    if(!adv.includes('<br><a href="../tutorial/wordPage1.html" target="_blank" rel="noopener noreferrer">課程學習檔案</a>')){
                        adv.push('<br><a href="../tutorial/wordPage1.html" target="_blank" rel="noopener noreferrer">課程學習檔案</a>');
                    };
                    break;
                  case 7:
                    if(!adv.includes('<br><a href="../tutorial/wordPage1.html" target="_blank" rel="noopener noreferrer">課程學習檔案</a>')){
                        adv.push('<br><a href="../tutorial/wordPage1.html" target="_blank" rel="noopener noreferrer">課程學習檔案</a>');
                    };
                    break;
                  case 8:
                    if(!adv.includes('<br><a href="../tutorial/wordPage1.html" target="_blank" rel="noopener noreferrer">課程學習檔案</a>')){
                        adv.push('<br><a href="../tutorial/wordPage1.html" target="_blank" rel="noopener noreferrer">課程學習檔案</a>');
                    };
                    break;
                  case 9:
                    if(!adv.includes('<br><a href="../tutorial/wordPage2.html" target="_blank" rel="noopener noreferrer">讀書計畫</a>')){
                        adv.push('<br><a href="../tutorial/wordPage2.html" target="_blank" rel="noopener noreferrer">讀書計畫</a>');
                    };
                    break;
                  case 10:
                    if(!adv.includes('<br><a href="../tutorial/wordPage2.html" target="_blank" rel="noopener noreferrer">讀書計畫</a>')){
                        adv.push('<br><a href="../tutorial/wordPage2.html" target="_blank" rel="noopener noreferrer">讀書計畫</a>');
                    };
                    break;
                  case 11:
                    if(!adv.includes('<br><a href="../tutorial/pptpage.html" target="_blank" rel="noopener noreferrer">PPT自傳</a>')){
                        adv.push('<br><a href="../tutorial/pptpage.html" target="_blank" rel="noopener noreferrer">PPT自傳</a>');
                    };
                    break;
                  case 12:
                    if(!adv.includes('<br><a href="../tutorial/pptpage.html" target="_blank" rel="noopener noreferrer">PPT自傳</a>')){
                        adv.push('<br><a href="../tutorial/pptpage.html" target="_blank" rel="noopener noreferrer">PPT自傳</a>');
                    };
                    break;
                  case 13:
                    if(!adv.includes('<br><a href="../tutorial/pptpage.html" target="_blank" rel="noopener noreferrer">PPT自傳</a>')){
                        adv.push('<br><a href="../tutorial/pptpage.html" target="_blank" rel="noopener noreferrer">PPT自傳</a>');
                    };
                    break;
              }
          }
          console.log(correct,wrong,que,adv.join(''));
          corNum.innerHTML=" "+correct+" ";
          wrNum.innerHTML= " "+wrong+" ";
          if(que.length==0){
            que1.innerHTML=" ";
            adv1.innerHTML="太棒了,你一題也沒錯呢!";
          }
          else{
            que1.innerHTML="("+que+")";
            adv1.innerHTML="建議回到下列課程複習:<br>"+adv.join(''); 
          }
      }
      function downCheck() {
        let down = 0;
        checkbox.forEach((x)=>{
            if(x.checked){
                down++;
            }
        });
        if(down==13){
            checkAns();
            resWindow[0].style.display= 'flex';
        }
        else{
            console.log('尚未完成');
            alert('尚未作答完成');
        }
      }
      sub[0].addEventListener('click',()=>{
            event.preventDefault();
            downCheck();
        });
      Closee[0].addEventListener('click',()=>{
        resWindow[0].style.display= 'none';
      });
      titleTag[0].addEventListener('animationend',()=>{
            titleTag[0].style.opacity = '1';
        });

