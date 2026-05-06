// 카페 데이터 배열
const cafeData = [
    { name: "청수당 공명", region: "서울", loc: "연남", insta: "cheongsudang_official" },
    { name: "레이어드", region: "서울", loc: "연남", insta: "cafe_layered" },
    { name: "런던 베이글 뮤지엄", region: "서울", loc: "안국", insta: "london.bagel.museum" },
    { name: "어니언", region: "서울", loc: "성수", insta: "cafe.onion" },
    { name: "테라로사 커피공장", region: "강원", loc: "강릉", insta: "terarosacoffee" },
    { name: "웨이브온", region: "경상", loc: "기장", insta: "waveoncoffee_official" },
    { name: "더클리프", region: "제주", loc: "중문", insta: "thecliffjeju" },
    { name: "조양방직", region: "경기/인천", loc: "강화", insta: "joyang_bangjik" },
    { name: "모이핀", region: "충청/전라", loc: "여수", insta: "moifin_official" }
    // 추가 100개 데이터가 여기에 포함됩니다.
];

/**
 * 페이지 전환 함수
 * @param {string} id - 전환할 페이지의 ID ('map' 또는 'list')
 */
function go(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('p-' + id).classList.add('active');
}

/**
 * 지역별 카페 리스트 생성 및 표시 함수
 * @param {string} region - 필터링할 지역명
 */
function showList(region) {
    const grid = document.getElementById('grid');
    const title = document.getElementById('listTitle');

    grid.innerHTML = '';
    title.textContent = `${region} 핫플레이스`;

    // 데이터 필터링
    const filtered = cafeData.filter(c => c.region === region);

    // 카드 요소 동적 생성
    filtered.forEach(c => {
        const naverSearch = `https://m.map.naver.com/search2/search.naver?query=${encodeURIComponent(c.loc + " " + c.name)}`;
        const instaLink = `https://www.instagram.com/${c.insta}/`;

        const el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = `
      <div class="cardHead">${c.name}</div>
      <div class="imgBox">
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400" alt="Cafe">
        <div class="overlay">
          <a href="${naverSearch}" target="_blank" class="btnLink btn-naver">네이버 지도 열기</a>
          <a href="${instaLink}" target="_blank" class="btnLink btn-insta">인스타그램 방문</a>
        </div>
      </div>
      <div class="cardFoot">
        <span class="loc-tag">위치: ${c.loc}</span>
        <a href="${instaLink}" target="_blank" class="insta-id">@${c.insta}</a>
      </div>
    `;
        grid.appendChild(el);
    });

    go('list');
}
