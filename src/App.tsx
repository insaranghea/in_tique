import { useState } from 'react';

const INIT_DATA = [
  {
    id: 1,
    name: '동치미막국수',
    area: '분당구 정자동',
    type: '막국수',
    price: '1만원대',
    queue: '💀',
    rating: 5,
    review: '비빔으로 먹다가 동치미 물 쭉 부어먹으면 진짜 맛있음. 현재 내 1위',
    revisit: true,
  },
  {
    id: 2,
    name: '톤쇼우',
    area: '부산',
    type: '돈까스',
    price: '2만원대',
    queue: '💀',
    rating: 5,
    review: '말하기도 입아픔. 전국 돈까스 1등. 뜨자마자 해도 67명이 앞에 있음',
    revisit: true,
  },
  {
    id: 3,
    name: '비야게레로',
    area: '삼성중앙역',
    type: '멕시칸',
    price: '2만원대',
    queue: '🧍🧍🧍🧍',
    rating: 5,
    review: '멕시칸 타코 진리. 고수 싫어하는 남편도 빠져서 벌써 6번째',
    revisit: true,
  },
  {
    id: 4,
    name: '윤밀원',
    area: '정자역',
    type: '보쌈/족발',
    price: '3만원대',
    queue: '💀',
    rating: 5,
    review: '족발에 고수 곁들이면 센세이션. 근데 이제 성시경 때문에 못 감',
    revisit: true,
  },
  {
    id: 5,
    name: '서현주막',
    area: '서현역',
    type: '막걸리/전',
    price: '1만원대',
    queue: '🧍🧍',
    rating: 5,
    review:
      '무생채에 마약 탄 것 같음. 육전 파무침은 사람 미치게 만듦. 막걸리 술술술',
    revisit: true,
  },
  {
    id: 6,
    name: '대성집',
    area: '독립문역',
    type: '도가니탕',
    price: '1만원대',
    queue: '🧍🧍🧍🧍',
    rating: 5,
    review:
      '하... 진짜 맛있음. 여름에도 뜨거운 도가니탕 먹으러 감. 노포감성 미침',
    revisit: true,
  },
  {
    id: 7,
    name: 'La Solfa',
    area: '이탈리아 피렌체',
    type: '이탈리안',
    price: '2만원대',
    queue: '💀',
    rating: 5,
    review:
      '소꼬리찜+시금치요리. 진짜 맛있는데 한국음식같은 맛. 현지 찐 가정식',
    revisit: true,
  },
  {
    id: 8,
    name: '돈파스타',
    area: '서현역',
    type: '이탈리안',
    price: '2만원대',
    queue: '🧍🧍',
    rating: 5,
    review: '진짜 오리지날 이탈리안 느낌. 먹고나서 속이 안부대낌',
    revisit: true,
  },
  {
    id: 9,
    name: '노가리&치킨89',
    area: '수지구 풍덕천동',
    type: '치킨',
    price: '1만원대',
    queue: '🚶',
    rating: 5,
    review:
      '노포감성+라이브바 느낌. 치킨 9900원. 7080 노래에 생맥 한잔 분위기 미침',
    revisit: true,
  },
  {
    id: 10,
    name: '복지식당',
    area: '경북 봉화군',
    type: '한식',
    price: '1만원대',
    queue: '🚶',
    rating: 5,
    review:
      '할머니댁 근처 아무도 모르는 찐맛집. 반찬에 더덕 나와서 충격. 아직도 잊혀지지 않음',
    revisit: true,
  },
];

const QUEUE_LABEL = {
  '🚶': '그냥 가도 돼',
  '🧍🧍': '좀 기다려',
  '🧍🧍🧍🧍': '줄 각오해',
  '💀': '각오단단히',
};
const QUEUE_COLOR = {
  '🚶': '#4CAF50',
  '🧍🧍': '#FF9800',
  '🧍🧍🧍🧍': '#FF5722',
  '💀': '#B71C1C',
};
const TYPE_COLOR = {
  막국수: '#4A7C59',
  돈까스: '#8B5E3C',
  멕시칸: '#C85C2D',
  '보쌈/족발': '#6B4C8A',
  '막걸리/전': '#7A6B4F',
  도가니탕: '#8A4A4A',
  이탈리안: '#4A6B8A',
  치킨: '#C8932D',
  한식: '#5A7A4A',
};

function BottomNav({ tab, setTab }) {
  const NAV = [
    { icon: '🏠', label: '공방', id: 'home' },
    { icon: '🗺️', label: '지도', id: 'map' },
    { icon: '➕', label: '기록', id: 'add' },
    { icon: '👥', label: '친구', id: 'friends' },
  ];
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 390,
        background: 'white',
        borderTop: '1px solid #F0EBE5',
        display: 'flex',
        padding: '12px 0 24px',
        zIndex: 100,
      }}
    >
      {NAV.map((n) => (
        <button
          key={n.id}
          onClick={() => setTab(n.id)}
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span style={{ fontSize: 22 }}>{n.icon}</span>
          <span
            style={{
              fontSize: 10,
              color: tab === n.id ? '#1A1A1A' : '#BBB',
              fontWeight: tab === n.id ? 700 : 400,
            }}
          >
            {n.label}
          </span>
        </button>
      ))}
    </div>
  );
}

function DetailScreen({ r, onBack }) {
  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        background: '#F7F3EE',
        minHeight: '100vh',
        maxWidth: 390,
        margin: '0 auto',
      }}
    >
      <div style={{ background: '#1A1A1A', padding: '52px 24px 24px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#F7F3EE',
            fontSize: 15,
            cursor: 'pointer',
            marginBottom: 14,
            fontFamily: 'inherit',
          }}
        >
          ← 돌아가기
        </button>
        <span
          style={{
            background: TYPE_COLOR[r.type] || '#555',
            color: 'white',
            fontSize: 10,
            padding: '3px 10px',
            borderRadius: 20,
          }}
        >
          {r.type}
        </span>
        <h1
          style={{
            color: '#F7F3EE',
            fontSize: 28,
            margin: '10px 0 6px',
            fontWeight: 400,
          }}
        >
          {r.name}
        </h1>
        <p style={{ color: '#AAA', margin: 0, fontSize: 13 }}>
          {r.area} · {r.price}
        </p>
      </div>
      <div
        style={{
          margin: '0 20px',
          transform: 'translateY(-18px)',
          background: 'white',
          borderRadius: 16,
          padding: '16px 20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <span style={{ fontSize: 28 }}>{r.queue}</span>
        <div>
          <div style={{ fontSize: 11, color: '#999', marginBottom: 2 }}>
            줄슬랭
          </div>
          <div
            style={{
              fontWeight: 700,
              color: QUEUE_COLOR[r.queue],
              fontSize: 15,
            }}
          >
            {QUEUE_LABEL[r.queue]}
          </div>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: '#999', marginBottom: 2 }}>
            평점
          </div>
          <div>{'⭐'.repeat(r.rating)}</div>
        </div>
      </div>
      <div style={{ padding: '0 20px 40px' }}>
        <div
          style={{
            background: '#1A1A1A',
            borderRadius: 20,
            padding: '24px',
            marginBottom: 14,
          }}
        >
          <p
            style={{
              color: '#F7F3EE',
              fontSize: 15,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {r.review}
          </p>
        </div>
        <div
          style={{
            background: r.revisit ? '#E8F5E9' : '#FFF3E0',
            borderRadius: 12,
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: 20 }}>{r.revisit ? '✅' : '🤔'}</span>
          <span
            style={{
              fontWeight: 600,
              color: r.revisit ? '#2E7D32' : '#E65100',
            }}
          >
            {r.revisit ? '또 갈 집' : '글쎄...'}
          </span>
        </div>
      </div>
    </div>
  );
}

function AddScreen({ onAdd }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [picked, setPicked] = useState(null);
  const [form, setForm] = useState({
    type: '',
    queue: '',
    review: '',
    revisit: true,
    price: '1만원대',
  });

  const MOCK_DB = [
    { name: '스시노칸도', area: '서울 강남구', type: '일식' },
    { name: '이태리키친', area: '서울 용산구', type: '이탈리안' },
    { name: '한우마을', area: '서울 서초구', type: '한식' },
    { name: '팔당냉면', area: '경기 남양주시', type: '냉면' },
    { name: '봉피양', area: '서울 강남구', type: '냉면/고기' },
    { name: '황소곱창', area: '서울 종로구', type: '곱창' },
  ];

  const handleSearch = (q) => {
    setQuery(q);
    if (!q) {
      setResults([]);
      return;
    }
    const matched = MOCK_DB.filter(
      (r) => r.name.includes(q) || r.area.includes(q)
    );
    setResults(
      [...matched, { name: q, area: '직접 입력', type: '' }].slice(0, 6)
    );
  };

  const canSubmit = form.queue && form.review && form.type;

  if (picked)
    return (
      <div style={{ padding: '20px 20px 120px' }}>
        <button
          onClick={() => setPicked(null)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: 14,
            color: '#888',
            cursor: 'pointer',
            marginBottom: 18,
            fontFamily: 'inherit',
          }}
        >
          ← 다시 검색
        </button>
        <div
          style={{
            background: '#1A1A1A',
            borderRadius: 16,
            padding: '18px',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              color: '#F5E6D3',
              fontSize: 10,
              letterSpacing: 2,
              marginBottom: 6,
            }}
          >
            선택한 맛집
          </div>
          <div style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>
            {picked.name}
          </div>
          <div style={{ color: '#888', fontSize: 12, marginTop: 4 }}>
            {picked.area}
          </div>
        </div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
            음식 종류
          </div>
          <input
            value={form.type}
            onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
            placeholder="예: 이탈리안, 막국수..."
            style={{
              width: '100%',
              border: '2px solid #EEE',
              borderRadius: 12,
              padding: '11px 14px',
              fontSize: 14,
              fontFamily: 'inherit',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
            줄슬랭
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {Object.entries(QUEUE_LABEL).map(([icon, label]) => (
              <button
                key={icon}
                onClick={() => setForm((f) => ({ ...f, queue: icon }))}
                style={{
                  background: form.queue === icon ? '#1A1A1A' : 'white',
                  color: form.queue === icon ? 'white' : '#555',
                  border:
                    '2px solid ' + (form.queue === icon ? '#1A1A1A' : '#EEE'),
                  borderRadius: 12,
                  padding: '9px 13px',
                  fontSize: 12,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                }}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
            가격대
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['1만원대', '2만원대', '3만원대', '4만원대~'].map((p) => (
              <button
                key={p}
                onClick={() => setForm((f) => ({ ...f, price: p }))}
                style={{
                  background: form.price === p ? '#1A1A1A' : 'white',
                  color: form.price === p ? 'white' : '#555',
                  border:
                    '2px solid ' + (form.price === p ? '#1A1A1A' : '#EEE'),
                  borderRadius: 12,
                  padding: '8px 10px',
                  fontSize: 11,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
            찐 한줄평
          </div>
          <textarea
            value={form.review}
            onChange={(e) => setForm((f) => ({ ...f, review: e.target.value }))}
            placeholder="솔직하게! 단점도 OK 👍"
            style={{
              width: '100%',
              minHeight: 90,
              border: '2px solid #EEE',
              borderRadius: 12,
              padding: '12px 14px',
              fontSize: 14,
              fontFamily: 'inherit',
              resize: 'none',
              outline: 'none',
              boxSizing: 'border-box',
              lineHeight: 1.6,
            }}
          />
        </div>
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
            또 갈 집?
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              [true, '✅ 또 갈 집'],
              [false, '🤔 글쎄...'],
            ].map(([val, label]) => (
              <button
                key={String(val)}
                onClick={() => setForm((f) => ({ ...f, revisit: val }))}
                style={{
                  flex: 1,
                  background: form.revisit === val ? '#1A1A1A' : 'white',
                  color: form.revisit === val ? 'white' : '#555',
                  border:
                    '2px solid ' + (form.revisit === val ? '#1A1A1A' : '#EEE'),
                  borderRadius: 12,
                  padding: '12px',
                  fontSize: 14,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() =>
            canSubmit &&
            onAdd({ ...picked, ...form, id: Date.now(), rating: 5 })
          }
          style={{
            width: '100%',
            background: canSubmit ? '#1A1A1A' : '#CCC',
            color: 'white',
            border: 'none',
            borderRadius: 14,
            padding: '16px',
            fontSize: 16,
            fontWeight: 700,
            cursor: canSubmit ? 'pointer' : 'not-allowed',
            fontFamily: 'inherit',
          }}
        >
          내 공방에 추가하기 🏠
        </button>
      </div>
    );

  return (
    <div style={{ padding: '20px 20px 100px' }}>
      <div
        style={{
          background: 'white',
          borderRadius: 14,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          marginBottom: 16,
        }}
      >
        <span style={{ fontSize: 18 }}>🔍</span>
        <input
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="가게 이름 검색..."
          style={{
            border: 'none',
            outline: 'none',
            fontSize: 15,
            width: '100%',
            fontFamily: 'inherit',
            background: 'transparent',
          }}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            style={{
              background: '#EEE',
              border: 'none',
              borderRadius: '50%',
              width: 22,
              height: 22,
              cursor: 'pointer',
              fontSize: 11,
            }}
          >
            ✕
          </button>
        )}
      </div>
      {results.map((r, i) => (
        <div
          key={i}
          onClick={() => setPicked(r)}
          style={{
            background: 'white',
            borderRadius: 14,
            padding: '14px 18px',
            marginBottom: 10,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ fontSize: 22 }}>🍽️</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 15 }}>{r.name}</div>
            <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>
              {r.area}
            </div>
          </div>
          <span style={{ color: '#CCC', fontSize: 18 }}>›</span>
        </div>
      ))}
      {!query && (
        <div style={{ textAlign: 'center', color: '#CCC', padding: '60px 0' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏠</div>
          <div style={{ fontSize: 14 }}>먹어본 맛집을 공방에 추가해봐</div>
        </div>
      )}
    </div>
  );
}

export default function IntiqueApp() {
  const [tab, setTab] = useState('home');
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('전체');
  const [search, setSearch] = useState('');
  const [list, setList] = useState(INIT_DATA);
  const [picked, setPicked] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const addRestaurant = (r) => {
    setList((prev) => [...prev, r]);
    setTab('home');
  };
  const pickRandom = () => {
    setSpinning(true);
    setPicked(null);
    setTimeout(() => {
      setPicked(list[Math.floor(Math.random() * list.length)]);
      setSpinning(false);
    }, 600);
  };

  if (selected)
    return <DetailScreen r={selected} onBack={() => setSelected(null)} />;

  const types = ['전체', ...new Set(list.map((r) => r.type))];
  const filtered = list.filter((r) => {
    const matchType = filter === '전체' || r.type === filter;
    const matchSearch =
      !search ||
      r.name.includes(search) ||
      r.area.includes(search) ||
      r.type.includes(search) ||
      r.review.includes(search);
    return matchType && matchSearch;
  });

  return (
    <div
      style={{
        fontFamily: 'Georgia, serif',
        background: '#F7F3EE',
        minHeight: '100vh',
        maxWidth: 390,
        margin: '0 auto',
      }}
    >
      <div style={{ background: '#1A1A1A', padding: '52px 24px 28px' }}>
        {tab === 'add' ? (
          <>
            <h1
              style={{
                color: '#F7F3EE',
                fontSize: 28,
                margin: '0 0 4px',
                fontWeight: 400,
              }}
            >
              맛집 추가
            </h1>
            <p style={{ color: '#888', margin: 0, fontSize: 13 }}>
              먹어본 찐 맛집만 ✅
            </p>
          </>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <div
                  style={{
                    color: '#F5E6D3',
                    fontSize: 10,
                    letterSpacing: 3,
                    marginBottom: 6,
                  }}
                >
                  MY WORKSHOP
                </div>
                <h1
                  style={{
                    color: '#F7F3EE',
                    fontSize: 32,
                    margin: '0 0 4px',
                    fontWeight: 400,
                  }}
                >
                  인티크
                </h1>
                <p style={{ color: '#888', fontSize: 12, margin: 0 }}>
                  나만의 찐 맛집 공방
                </p>
              </div>
              <div
                style={{
                  background: '#F5E6D3',
                  borderRadius: '50%',
                  width: 46,
                  height: 46,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#1A1A1A',
                }}
              >
                강
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[
                ['공방 맛집', list.length],
                ['💀 각오단단히', list.filter((r) => r.queue === '💀').length],
                ['또 갈 집', list.filter((r) => r.revisit).length],
              ].map(([label, val]) => (
                <div
                  key={label}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    padding: '10px 12px',
                    flex: 1,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{ color: '#F7F3EE', fontSize: 20, fontWeight: 700 }}
                  >
                    {val}
                  </div>
                  <div style={{ color: '#888', fontSize: 9, marginTop: 2 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {tab === 'add' ? (
        <AddScreen onAdd={addRestaurant} />
      ) : (
        <>
          <div style={{ padding: '16px 20px 0' }}>
            <div
              style={{
                background: '#1A1A1A',
                borderRadius: 20,
                padding: '18px 20px',
              }}
            >
              <div
                style={{
                  color: '#F5E6D3',
                  fontSize: 10,
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
              >
                RANDOM PICK
              </div>
              {picked ? (
                <div style={{ marginBottom: 12 }}>
                  <div
                    style={{ color: '#F7F3EE', fontSize: 20, fontWeight: 600 }}
                  >
                    {picked.name}
                  </div>
                  <div style={{ color: '#888', fontSize: 12, marginTop: 2 }}>
                    {picked.area} · {picked.queue} {QUEUE_LABEL[picked.queue]}
                  </div>
                </div>
              ) : (
                <div style={{ color: '#666', fontSize: 14, marginBottom: 12 }}>
                  오늘 뭐먹지? 🤔
                </div>
              )}
              <button
                onClick={pickRandom}
                style={{
                  background: '#F5E6D3',
                  border: 'none',
                  borderRadius: 12,
                  padding: '11px 20px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  color: '#1A1A1A',
                  width: '100%',
                }}
              >
                {spinning
                  ? '고르는 중...'
                  : picked
                  ? '다시 뽑기 🎲'
                  : '오늘 메뉴 뽑기 🎲'}
              </button>
            </div>
          </div>
          <div style={{ padding: '14px 20px 0' }}>
            <div
              style={{
                background: 'white',
                borderRadius: 14,
                padding: '11px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              }}
            >
              <span>🔍</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="가게명, 지역, 종류 검색..."
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: 14,
                  width: '100%',
                  fontFamily: 'inherit',
                  background: 'transparent',
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  style={{
                    background: '#EEE',
                    border: 'none',
                    borderRadius: '50%',
                    width: 20,
                    height: 20,
                    cursor: 'pointer',
                    fontSize: 10,
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          <div
            style={{
              padding: '10px 20px 6px',
              display: 'flex',
              gap: 8,
              overflowX: 'auto',
              scrollbarWidth: 'none',
            }}
          >
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                style={{
                  background: filter === t ? '#1A1A1A' : 'white',
                  color: filter === t ? '#F7F3EE' : '#666',
                  border: 'none',
                  borderRadius: 20,
                  padding: '7px 14px',
                  fontSize: 12,
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  fontWeight: filter === t ? 600 : 400,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div style={{ padding: '8px 20px 110px' }}>
            {filtered.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                  color: '#CCC',
                  padding: '40px 0',
                }}
              >
                검색 결과가 없어 😢
              </div>
            )}
            {filtered.map((r) => (
              <div
                key={r.id}
                onClick={() => setSelected(r)}
                style={{
                  background: 'white',
                  borderRadius: 18,
                  padding: '16px 18px',
                  marginBottom: 10,
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  borderLeft: `4px solid ${TYPE_COLOR[r.type] || '#CCC'}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          background: TYPE_COLOR[r.type] || '#555',
                          color: 'white',
                          fontSize: 9,
                          padding: '2px 8px',
                          borderRadius: 10,
                        }}
                      >
                        {r.type}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: QUEUE_COLOR[r.queue],
                          fontWeight: 600,
                        }}
                      >
                        {r.queue} {QUEUE_LABEL[r.queue]}
                      </span>
                    </div>
                    <h3
                      style={{
                        margin: '0 0 3px',
                        fontSize: 17,
                        fontWeight: 600,
                        color: '#1A1A1A',
                      }}
                    >
                      {r.name}
                    </h3>
                    <p
                      style={{ margin: '0 0 6px', fontSize: 11, color: '#999' }}
                    >
                      {r.area} · {r.price}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: '#555',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {r.review}
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: 10,
                      textAlign: 'right',
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ fontSize: 13 }}>⭐⭐⭐⭐⭐</div>
                    <div style={{ fontSize: 16, marginTop: 4 }}>
                      {r.revisit ? '✅' : '🤔'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <BottomNav tab={tab} setTab={setTab} />
    </div>
  );
}
