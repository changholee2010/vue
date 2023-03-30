<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Insert title here</title>
</head>

<body>
  <!-- 시도: <input type="text" id="sido"> -->
  시도선택: <select id="sidoList">
  </select>
  <button id="sidoBtn">찾기</button>

  <h3>센터현황</h3>
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>센터명</th>
        <th>주소</th>
        <th>연락처</th>
        <th>시도</th>
      </tr>
    </thead>
    <tbody id="centerList"></tbody>
  </table>

  <script>
    let showFields = ['id', 'centerName', 'address', 'phoneNumber', 'sido']

    // row 생성.
    function makeTr(center = {}) {
      // tr생성>td*여러개.
      let tr = document.createElement('tr');
      // td생성.
      showFields.forEach(field => {
        let td = document.createElement('td');
        td.innerText = center[field];
        tr.append(td);
      })
      return tr;
    }

    // 전체목록.
    let totalList; // 다른 함수에서도 활용.
    let url =
      `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=qCwQYxNXeK%2FaB1Ngf9oNZDttjmjQ6ku1OdR6%2Fd0Jj5EIdqOxMXolplih%2BYjTqB4uxCuK636co3tf9T5%2Fr9OLvw%3D%3D`;
    fetch(url)
      .then(resolve => resolve.json())
      .then(result => {
        console.log(result);
        let aryData = result.data;
        totalList = aryData; // 처리결과를 활용해서 totalList 대입.
        aryData.forEach(function (center) {
          let tr = makeTr(center);
          document.querySelector('#centerList').append(tr);
        });

        // 시도 배열.
        // totalList; //{id, centerName, address, sido}
        // push, pop, unshift, shift
        let sidoAry = [];

        sidoAry.forEach(function (sido) {
          let opt = document.createElement('option');
          opt.value = sido;
          opt.innerText = sido;
          document.querySelector('#sidoList').append(opt);
        });

      })
      .catch(reject => console.error(reject));



    // 찾기 버튼.
    document.querySelector('#sidoBtn').addEventListener('click', findSidoFnc);

    function findSidoFnc() {
      // 전체목록. 검색조건 filter한 결과를 tbody의 하위목록 출력.
      document.querySelector('#centerList').innerHTML = "";
      let searchWord = document.getElementById('sido').value;
      let filterAry = totalList.filter(function (center) {
        return center.sido == searchWord;
      });
      filterAry.forEach(center => {
        document.querySelector('#centerList').append(makeTr(center));
      });
    }
  </script>
</body>

</html>