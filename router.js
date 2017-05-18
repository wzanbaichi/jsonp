app.get('/change',function(req,res){

  var news = [
    'asdkfjakjdgsjhdhddsf',
    '172836bshjrt872bhb',
    '76ehsdbyutr32',
    '93284yxzbfidf',
    '98yhjkxzbg78r',
    '98vycvin89r2',
    '9as78uhdqowne',
    'adgfg789jfdvh78'
  ]
  var data = []
  for(var i = 0;i<3;i++){
    data.push(news[parseInt(Math.random()*news.length)])
  }
  // res.send(data);
  res.send('appendHtml('+JSON.stringify(data)+')')
});
