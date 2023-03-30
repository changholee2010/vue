<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
  <table>
    <thead>
      <tr><th>아이디</th><th>센터명</th><th>주소</th><th>연락처</th><th>시도</th></tr>
    </thead>
    <tbody id="centerList"></tbody>
  </table>
  
  <script>
    let showFields = ['id', 'centerName', 'address', 'phoneNumber', 'sido']
    
    // row 생성.
    function makeTr(center={}) {
    	// tr생성>td*여러개.
    	let tr = document.createElement('tr');
    	// td생성.
    	
    	return tr;
    }
  
    let url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=qCwQYxNXeK%2FaB1Ngf9oNZDttjmjQ6ku1OdR6%2Fd0Jj5EIdqOxMXolplih%2BYjTqB4uxCuK636co3tf9T5%2Fr9OLvw%3D%3D`;
    fetch(url)
    .then(resolve => resolve.json())
    .then(result => {
    	console.log(result);
    	let aryData = result.data;
    	aryData.forEach(function (center) {
    		let tr = makeTr(center);
    		document.querySelector('#centerList').append(tr);
    	});
    })
    .catch(reject => console.error(reject));
    
  </script>
</body>
</html>