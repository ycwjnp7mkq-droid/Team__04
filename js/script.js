const cafeData = [
    // 서울
    { name: "카페 어니언", region: "서울", loc: "성수/안국", insta: "cafe.onion" },
    { name: "테디뵈르하우스", region: "서울", loc: "용산", insta: "teddy.beurre.house" },
    { name: "레인리포트", region: "서울", loc: "익선/이태원", insta: "rainreport_official" },
    { name: "카멜커피", region: "서울", loc: "도산/성수", insta: "camelcoffee_kor" },
    { name: "런던베이글뮤지엄", region: "서울", loc: "안국/도산", insta: "london.bagel.museum" },
    { name: "노티드", region: "서울", loc: "청담/성수", insta: "cafeknotted_kr" },
    { name: "누데이크", region: "서울", loc: "도산", insta: "nu_dake" },
    { name: "프릳츠", region: "서울", loc: "마포/종로", insta: "fritzcoffeecompany" },
    { name: "앤트러사이트", region: "서울", loc: "한남/합정", insta: "anthracite_coffee_roasters" },
    { name: "카페 레이어드", region: "서울", loc: "안국/연남", insta: "cafe_layered" },

    // 경기/인천
    { name: "더티트렁크", region: "경기/인천", loc: "파주", insta: "dirty_trunk_korea" },
    { name: "말똥도넛", region: "경기/인천", loc: "파주", insta: "malddongdonut_official" },
    { name: "앤드테라스", region: "경기/인천", loc: "파주/일산", insta: "cafe_andterrace" },
    { name: "포레스트아웃팅스", region: "경기/인천", loc: "인천 송도", insta: "forestoutings_songdo" },
    { name: "포지티브스페이스566", region: "경기/인천", loc: "김포", insta: "positivespace566" },
    { name: "카페드첼시", region: "경기/인천", loc: "김포", insta: "cafe_de_chelsea_official" },
    { name: "카페 대너리스", region: "경기/인천", loc: "남양주", insta: "cafe_daenerys.official" },
    { name: "아우어베이커리", region: "경기/인천", loc: "광교/고척", insta: "ourbakerycafe" },
    { name: "베이커리씨어터", region: "경기/인천", loc: "남양주", insta: "bakery_theater" },
    { name: "아보고가", region: "경기/인천", loc: "김포", insta: "abogoga_official" },

    // 경상
    { name: "모모스커피", region: "경상", loc: "부산 영도", insta: "momoscoffee_official" },
    { name: "웨이브온커피", region: "경상", loc: "부산 기장", insta: "waveoncoffee_official" },
    { name: "카페385", region: "경상", loc: "부산 영도", insta: "cafe385_" },
    { name: "블랙업커피", region: "경상", loc: "부산 서면", insta: "blackup_coffee" },
    { name: "오구카페", region: "경상", loc: "부산 영도", insta: "ogu__official" },
    { name: "수월경화", region: "경상", loc: "부산 송정", insta: "swgh_official" },
    { name: "컵넛", region: "경상", loc: "부산대", insta: "cupnut_official" },
    { name: "듀플릿", region: "경상", loc: "부산 전포", insta: "duplitcompany" },
    { name: "브라운핸즈백제", region: "경상", loc: "부산 초량", insta: "brownhands_baekje_" },
    { name: "초량1941", region: "경상", loc: "부산 초량", insta: "_choryang" },

    // 제주
    { name: "원앤온리 제주", region: "제주", loc: "서귀포", insta: "jejuoneandonly" },
    { name: "울트라마린", region: "제주", loc: "한경", insta: "ultramarine_jeju" },
    { name: "카페 한라산", region: "제주", loc: "구좌", insta: "cafe_hallasan" },
    { name: "해지개", region: "제주", loc: "애월", insta: "haejigae_jeju" },
    { name: "노을리", region: "제주", loc: "애월", insta: "noeully" },
    { name: "오설록 티뮤지엄", region: "제주", loc: "서귀포", insta: "osulloc_official" },
    { name: "카페 레이어드 제주", region: "제주", loc: "제주", insta: "cafe_layered" },
    { name: "서울앵무새 제주", region: "제주", loc: "서귀포", insta: "seoul_angmusae" },
    { name: "런던베이글뮤지엄 제주", region: "제주", loc: "제주", insta: "london.bagel.museum" },
    { name: "노티드 제주", region: "제주", loc: "제주", insta: "cafeknotted_kr" },

    // 강원
    { name: "테라로사", region: "강원", loc: "강릉", insta: "terarosacoffee" },
    { name: "툇마루", region: "강원", loc: "강릉", insta: "toenmaru_official" },
    { name: "보헤미안박이추커피", region: "강원", loc: "강릉", insta: "bohemiancoffee_official" },
    { name: "애시당초", region: "강원", loc: "강릉", insta: "ashdangcho_official" },
    { name: "순두부젤라또", region: "강원", loc: "강릉", insta: "soontofugelato" },
    { name: "칠성조선소", region: "강원", loc: "속초", insta: "chilsungboatyard" },
    { name: "바다정원", region: "강원", loc: "고성/속초", insta: "badajungwon" },
    { name: "이진리", region: "강원", loc: "강릉", insta: "cafe_easily" },
    { name: "보사노바커피", region: "강원", loc: "강릉", insta: "bossanova_coffee_roasters" },
    { name: "갤러리밥스", region: "강원", loc: "강릉", insta: "g_gallerybobs" }
];

function go(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('p-' + id).classList.add('active');
    window.scrollTo(0, 0);
}

function showList(region) {
    const grid = document.getElementById('grid');
    const title = document.getElementById('listTitle');
    grid.innerHTML = '';
    title.textContent = `${region} 핫플레이스`;

    const filtered = cafeData.filter(c => c.region === region);

    filtered.forEach(c => {
        const naverSearch = `https://m.map.naver.com/search2/search.naver?query=${encodeURIComponent(c.loc + " " + c.name)}`;
        const instaLink = `https://www.instagram.com/${c.insta}/`;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <div class="cardHead">${c.name}</div>
      <div class="imgBox">
        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" alt="${c.name}">
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
        grid.appendChild(card);
    });
    go('list');
}