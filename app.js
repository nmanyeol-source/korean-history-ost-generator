const appData = {
  options: {
    역사_시대: ["삼국시대", "통일신라", "고려", "조선 시대(단종 테마 포함)", "대한제국", "일제강점기", "독립운동기", "6·25 전쟁기", "한국 현대사"],
    역사_주제: ["단종이 매화에게 보내는 마지막 편지 (신규)", "전하, 이제 강을 건널 때입니다 (신규)", "정조와 개혁", "사도세자의 비극", "소현세자의 슬픔", "유관순과 독립", "논개의 희생", "이순신의 용기", "덕혜옹주의 상실", "명성황후와 국장", "역사를 지킨 이름 없는 민초들", "직접 입력"],
    핵심_감정: ["비장함", "충심(忠)", "용기", "그리움", "희생", "숭고함", "비극", "희망", "저항", "송별", "통곡", "결의", "추모"],
    가사_시점: ["역사적 인물의 1인칭 독백", "비극을 바라보는 관찰자(화자)", "영웅을 기리는 백성들의 목소리", "유서 및 편지 형식", "대궐의 통곡", "조국이 인물을 부르는 소리", "왕을 향한 신하의 절개", "후대가 기억하는 노래"],
    가사_스타일: ["비극적 역사 발라드", "한국 뮤지컬 스타일", "영화적 서사시", "서정적 민요 발라드", "엄숙한 다큐멘터리풍", "웅장한 애국 찬가", "애절한 송별곡", "궁중 비극 뮤지컬"],
    음악_스타일: ["영화적 국악 오케스트라", "비장한 역사적 발라드", "웅장한 전쟁 북과 현악", "애절한 국악 보컬 발라드", "슬픈 해금과 가야금 선율", "현대 오케스트라 융합 궁중 음악", "영웅적 시네마틱 스코어"],
    보컬_스타일: ["한국 여성 보컬", "한국 남성 보컬", "애절한 합창단", "전통 창법 가창(국악풍)", "내레이션 복합형", "듀엣", "연주곡(Vocal None)"],
    영상_길이: ["30초 (Shorts/티저)", "60초 (숏폼 뮤비)", "3분 (유튜브 정식 뮤비)", "5분 (대서사시 뮤비)"]
  },
  presets: {
    "단종이 매화에게 보내는 마지막 편지 (신규)": {
      시대: "조선 시대 (단종 재위기 및 유배기)",
      시점: "영월에 홀로 남겨진 단종이 바라보는 매화(창작적 상징)에게 건네는 1인칭 독백",
      감정: ["그리움", "슬픔", "초연함"],
      음악보컬: "슬픈 해금과 가야금 선율 + 미성이 돋보이는 한국 남성 보컬",
      연출: "추운 겨울을 견디고 피어나는 매화를 보며, 자신의 짧았던 삶과 두고 온 이들을 향한 마음을 편지 형식으로 서술"
    },
    "전하, 이제 강을 건널 때입니다 (신규)": {
      시대: "조선 시대 (단종 폐위 및 계유정난 이후)",
      시점: "단종을 모시던 가상의 충신 또는 역사적 비극을 바라보는 관찰자의 시선",
      감정: ["비극", "충심", "통곡"],
      음악보컬: "현대 오케스트라 융합 궁중 음악 + 애절한 한국 여성 보컬 또는 합창",
      연출: "돌아올 수 없는 강을 건너 유배지로 향하거나 마지막 한 걸음을 내딛는 단종의 뒷모습을 보며 느끼는 민초/신하의 무력함과 숭고한 충심의 대비"
    },
    "이순신의 용기": {
      시대: "조선 시대(단종 테마 포함)",
      시점: "역사적 인물의 1인칭 독백",
      감정: ["비장함", "결의", "숭고함"],
      음악보컬: "웅장한 전쟁 북과 현악 + 한국 남성 보컬",
      연출: "명량해전 전날 밤, 난중일기를 써 내려가며 느끼는 고독한 지휘관의 두려움과 이를 극복하고 백성을 지키려는 비장한 결의를 서사시 형태로 표현"
    },
    "유관순과 독립": {
      시대: "일제강점기",
      시점: "유서 및 편지 형식",
      감정: ["저항", "희망", "용기"],
      음악보컬: "애절한 국악 보컬 발라드 + 애절한 합창단",
      연출: "어둡고 차가운 서대문 형무소 안에서도 결코 꺾이지 않는 조국 독립에 대한 열망과, 남은 이들에게 전하는 희망의 메시지를 편지 형식으로 연출"
    },
    "사도세자의 비극": {
      시대: "조선 시대(단종 테마 포함)",
      시점: "대궐의 통곡",
      감정: ["비극", "통곡", "그리움"],
      음악보컬: "영화적 국악 오케스트라 + 연주곡(Vocal None)",
      연출: "한여름 좁고 어두운 뒤주에 갇힌 사도세자의 고통과 숨죽여 통곡하는 대궐 사람들의 시선을 교차하며, 아버지(영조)를 향한 원망과 애착의 복합적 감정을 대사 없는 묵직한 연주곡으로 묘사"
    }
  }
};

const factMap = {
  "단종이 매화에게 보내는 마지막 편지 (신규)": "단종은 세조에게 왕위를 빼앗긴 뒤 영월 청령포로 유배되었고, 이후 죽음을 맞은 조선의 비극적 군주입니다.",
  "전하, 이제 강을 건널 때입니다 (신규)": "계유정난 이후 단종은 폐위되어 유배되었고, 조선 왕실 권력 다툼 속에서 짧은 생을 마쳤습니다.",
  "정조와 개혁": "정조는 규장각 설치, 탕평책, 수원 화성 건설 등으로 조선 후기 개혁 정치를 추진했습니다.",
  "사도세자의 비극": "사도세자는 영조와의 갈등 속에서 뒤주에 갇혀 사망했고, 이 사건은 조선 왕실사의 큰 비극으로 기억됩니다.",
  "소현세자의 슬픔": "소현세자는 병자호란 뒤 청나라에 볼모로 갔다가 귀국했으나 곧 병으로 사망했습니다.",
  "유관순과 독립": "유관순은 3·1운동에 참여하고 아우내 만세운동을 이끌었으며, 서대문형무소에서 순국한 독립운동가입니다.",
  "논개의 희생": "논개는 임진왜란 중 진주성 전투 이후 왜장을 끌어안고 남강에 몸을 던진 인물로 전해집니다.",
  "이순신의 용기": "이순신은 임진왜란과 정유재란에서 조선 수군을 이끌었고, 명량해전 등에서 큰 승리를 거두었습니다.",
  "덕혜옹주의 상실": "덕혜옹주는 대한제국 고종의 딸로, 일제강점기 일본 유학과 강제적 혼인 등 격동의 삶을 겪었습니다.",
  "명성황후와 국장": "명성황후는 1895년 을미사변으로 시해되었고, 대한제국 선포 전후 조선 말기의 상징적 인물로 남았습니다.",
  "역사를 지킨 이름 없는 민초들": "전쟁, 침략, 식민 지배와 격동의 근현대사 속에서 이름 없는 백성들은 삶의 터전과 공동체를 지켜냈습니다."
};

const creativeMap = {
  "단종이 매화에게 보내는 마지막 편지 (신규)": "매화는 실제 사료의 단정이 아니라, 고독과 희망을 시각화한 창작적 문학 상징입니다.",
  "전하, 이제 강을 건널 때입니다 (신규)": "강은 유배와 죽음, 돌아올 수 없는 역사적 경계선을 표현하는 창작적 상징입니다.",
  "사도세자의 비극": "대궐의 숨죽인 통곡은 사건의 정서를 드러내기 위한 극적 관찰 장치입니다."
};

const fields = [
  ["역사_시대", "역사 시대"],
  ["역사_주제", "역사 주제"],
  ["핵심_감정", "핵심 감정"],
  ["가사_시점", "가사 시점"],
  ["가사_스타일", "가사 스타일"],
  ["음악_스타일", "음악 스타일"],
  ["보컬_스타일", "보컬 스타일"],
  ["영상_길이", "영상 길이"]
];

const fieldGrid = document.querySelector("#field-grid");
const output = document.querySelector("#output");
const presetSummary = document.querySelector("#preset-summary");
const presetBadge = document.querySelector("#preset-badge");
const resultTitle = document.querySelector("#result-title");
const form = document.querySelector("#generator-form");
const CUSTOM_SUBJECT_OPTION = "직접 입력";

function renderFields() {
  fields.forEach(([key, label]) => {
    const field = document.createElement("label");
    field.className = "field";
    field.innerHTML = `<span>${label}</span><select id="${key}" name="${key}"></select>`;
    fieldGrid.appendChild(field);

    const select = field.querySelector("select");
    appData.options[key].forEach((option) => {
      const item = document.createElement("option");
      item.value = option;
      item.textContent = option;
      select.appendChild(item);
    });

    if (key === "역사_주제") {
      const customInput = document.createElement("input");
      customInput.className = "custom-subject-input";
      customInput.id = "custom-subject";
      customInput.name = "custom-subject";
      customInput.type = "text";
      customInput.placeholder = "예: 광개토대왕의 북방 원정, 제주 4·3의 기억, 광주 민주화 운동";
      customInput.hidden = true;
      customInput.setAttribute("aria-label", "직접 입력할 역사 주제");
      field.appendChild(customInput);
    }
  });
}

function getValues() {
  const values = Object.fromEntries(fields.map(([key]) => [key, document.querySelector(`#${key}`).value]));
  const selectedSubject = values.역사_주제;
  const customSubject = document.querySelector("#custom-subject")?.value.trim();

  if (selectedSubject === CUSTOM_SUBJECT_OPTION) {
    values.역사_주제 = customSubject || "사용자 직접 입력 주제";
    values.직접입력_주제 = true;
  }

  values.선택된_역사_주제 = selectedSubject;
  return values;
}

function setSelectValue(key, value) {
  const select = document.querySelector(`#${key}`);
  if (!select || !value) return;

  const exists = [...select.options].some((option) => option.value === value);
  if (!exists) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    option.dataset.preset = "true";
    select.appendChild(option);
  }
  select.value = value;
}

function applyPreset() {
  const values = getValues();
  const preset = appData.presets[values.선택된_역사_주제];

  if (!preset || values.직접입력_주제) {
    presetBadge.textContent = values.직접입력_주제 ? "직접 입력 주제" : "일반 설정";
    presetSummary.textContent = values.직접입력_주제
      ? `"${values.역사_주제}" 주제를 바탕으로 기본 생성 규칙을 적용합니다. 역사적 사실은 수업 자료로 한 번 더 확인하세요.`
      : "선택한 항목을 바탕으로 기본 생성 규칙을 적용합니다.";
    return values;
  }

  presetBadge.textContent = "자동 프리셋 적용";
  presetSummary.textContent = `${preset.시대} · ${preset.감정.join(", ")} · ${preset.음악보컬}`;
  setSelectValue("역사_시대", preset.시대);
  setSelectValue("가사_시점", preset.시점);
  setSelectValue("핵심_감정", preset.감정.join(", "));

  return {
    ...values,
    역사_시대: preset.시대,
    가사_시점: preset.시점,
    핵심_감정: preset.감정.join(", "),
    프리셋_음악보컬: preset.음악보컬,
    예술적_연출: preset.연출
  };
}

function getDurationPlan(duration) {
  if (duration.startsWith("30초")) return ["0-5초", "5-15초", "15-24초", "24-30초"];
  if (duration.startsWith("60초")) return ["0-10초", "10-28초", "28-48초", "48-60초"];
  if (duration.startsWith("3분")) return ["0:00-0:25", "0:25-1:20", "1:20-2:25", "2:25-3:00"];
  return ["0:00-0:40", "0:40-2:20", "2:20-4:10", "4:10-5:00"];
}

function buildLyrics(values) {
  const emotion = values.핵심_감정;
  const subject = values.역사_주제.replace(" (신규)", "");
  const note = document.querySelector("#custom-note").value.trim();
  const extra = note ? `\n\n[추가 요청 반영]\n${note}` : "";

  return `[Intro]\n(잔잔한 대금 소리, 먼 북소리)\n어둠 끝에 이름 하나, 바람 속에 다시 선다\n\n[Verse]\n${subject}, 그 길 위에 남겨진 마음\n차가운 밤을 지나도 꺾이지 않는 숨결\n\n[Pre-Chorus]\n기억하라, 눈물은 길이 되고\n침묵 속의 약속은 노래가 되리\n\n[Chorus]\n${emotion}의 불꽃이여, 시간을 건너 울려라\n잊지 않겠다, 이 땅의 하늘 아래\n사실은 별처럼 남고, 마음은 강처럼 흐른다\n\n[Bridge]\n(해금 선율이 높아지고 현악이 넓게 펼쳐짐)\n역사는 말한다, 아픔을 꾸미지 말라고\n그러나 마음은 말한다, 그 이름을 불러 달라고\n\n[Outro]\n(합창 또는 낮은 현악으로 마무리)\n오늘의 우리가 그 노래를 이어\n다시 빛으로 기록하리${extra}`;
}

function buildMusicPrompt(values) {
  const vocal = values.프리셋_음악보컬 || `${values.음악_스타일} with ${values.보컬_스타일}`;
  return `A Korean historical music video OST about "${values.역사_주제}". Style: ${values.가사_스타일}, ${values.음악_스타일}. Vocal and arrangement: ${vocal}. Mood: ${values.핵심_감정}. Start with an emotional Korean traditional instrument motif such as daegeum, haegeum, or gayageum, then expand into cinematic strings and restrained percussion. Keep the tone educational, dignified, tragic when needed, and historically respectful. Avoid modern party beats, comic effects, distorted historical claims, or overly bright commercial pop production.`;
}

function buildStoryboard(values) {
  const times = getDurationPlan(values.영상_길이);
  const scene = values.예술적_연출 || "역사적 사건의 사실 맥락을 바탕으로 인물의 감정과 후대의 기억을 교차 편집합니다.";
  return `도입부 (${times[0]}): 시대 배경을 보여주는 공간, 사물, 기록의 클로즈업으로 시작합니다. 화면에는 과장된 사건 재현보다 정서의 단서를 먼저 배치합니다.\n\n전개부 (${times[1]}): ${scene}\n\n고조부 (${times[2]}): 음악의 현악과 타악이 커지며 인물의 선택, 백성의 시선, 남겨진 기록을 빠르게 교차합니다.\n\n절정 및 결말 (${times[3]}): 감정을 절정으로 올린 뒤, 사실과 창작의 경계를 분명히 하는 상징 장면으로 마무리합니다. 마지막 컷은 후대가 기억하는 이름 또는 장소에 머무릅니다.`;
}

function buildImageVideoPrompt(values) {
  const times = getDurationPlan(values.영상_길이);
  const subject = values.역사_주제.replace(" (신규)", "");
  const base = `Korean historical music video scene, ${values.역사_시대}, theme "${subject}", mood of ${values.핵심_감정}, ${values.가사_스타일}, cinematic Korean period drama, historically respectful costumes and props, emotional lighting, realistic texture, no modern objects, no text, no watermark`;

  return `[Scene 1 / ${times[0]}]\n${base}. Establishing shot: symbolic place, archival-feeling objects, quiet atmosphere, slow camera movement.\n\n[Scene 2 / ${times[1]}]\n${base}. Main emotional scene: ${values.예술적_연출 || "the central historical figure or ordinary people facing the event with restrained emotion"}.\n\n[Scene 3 / ${times[2]}]\n${base}. Climax shot: stronger contrast, wind, flags, palace corridor, prison corridor, battlefield sea, or public square depending on the topic. Match the music build-up.\n\n[Scene 4 / ${times[3]}]\n${base}. Closing shot: memory, records, landscape, or descendants remembering the event. Keep the ending solemn and educational.\n\n[Video Direction]\nUse slow dolly shots, soft handheld movement only during emotional tension, gentle crossfades, close-ups of hands, letters, instruments, historical objects, and faces. Avoid exaggerated violence or inaccurate fantasy elements.`;
}

function buildDialoguePrompt(values) {
  const subject = values.역사_주제.replace(" (신규)", "");
  const narrationRole = values.가사_시점.includes("편지") || values.가사_시점.includes("독백")
    ? "인물의 짧은 독백 또는 편지 낭독"
    : "후대의 조용한 내레이션과 관찰자의 짧은 대사";

  return `[사용 목적]\nMV 중간에 삽입할 ${narrationRole}을 작성한다. 역사적 사실은 바꾸지 않고, 감정 표현은 창작 대사임을 분명히 한다.\n\n[대사 톤]\n${values.핵심_감정}이 느껴지는 절제된 한국어 문장. 과장된 설명보다 짧고 기억에 남는 문장으로 구성한다.\n\n[샘플 대사]\n1. "${subject}, 이 이름은 오늘도 조용히 우리 곁에 남아 있습니다."\n2. "나는 모든 것을 말할 수 없으나, 이 마음만은 역사 앞에 남기고 갑니다."\n3. "울음은 기록되지 않아도, 그날의 선택은 사라지지 않습니다."\n4. "후대의 우리가 부르는 이 노래가, 잊힌 마음을 다시 밝히게 하소서."\n\n[주의]\n실제 사료에 없는 말은 '창작 대사'로 사용한다. 특정 인물이 실제로 말했다고 단정하지 않는다.`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function syncCustomSubjectVisibility() {
  const subjectSelect = document.querySelector("#역사_주제");
  const customInput = document.querySelector("#custom-subject");
  if (!subjectSelect || !customInput) return;

  const shouldShow = subjectSelect.value === CUSTOM_SUBJECT_OPTION;
  customInput.hidden = !shouldShow;
  customInput.required = shouldShow;
  if (shouldShow) customInput.focus();
}

function renderOutput(values) {
  const fact = factMap[values.역사_주제] || `${values.역사_시대}의 주요 사건과 인물을 검증된 자료로 확인한 뒤 서사를 구성해야 합니다.`;
  const creative = creativeMap[values.역사_주제] || "감정의 독백, 장면 전환, 상징물은 역사적 사실이 아니라 교육용 창작 해석으로 명시합니다.";
  resultTitle.textContent = values.역사_주제.replace(" (신규)", "");
  const lyrics = buildLyrics(values);
  const musicPrompt = buildMusicPrompt(values);
  const storyboard = buildStoryboard(values);
  const imageVideoPrompt = buildImageVideoPrompt(values);
  const dialoguePrompt = buildDialoguePrompt(values);

  output.innerHTML = `
    <section class="output-section">
      <h3>1. Historical Context</h3>
      <ul class="meta-list">
        <li>${escapeHtml(values.역사_시대)}</li>
        <li>${escapeHtml(values.영상_길이)}</li>
        <li>${escapeHtml(values.가사_스타일)}</li>
      </ul>
      <p><strong>Fact:</strong> ${escapeHtml(fact)}</p>
      <p><strong>Creative Interpretation:</strong> ${escapeHtml(creative)}</p>
    </section>
    <section class="output-section">
      <h3>2. Lyrics</h3>
      <pre>${escapeHtml(lyrics)}</pre>
    </section>
    <section class="output-section">
      <h3>3. AI Music Prompt</h3>
      <p>${escapeHtml(musicPrompt)}</p>
    </section>
    <section class="output-section">
      <h3>4. Cinematic Storyboard</h3>
      <pre>${escapeHtml(storyboard)}</pre>
    </section>
    <section class="output-section">
      <h3>5. Image / Video Prompt</h3>
      <pre>${escapeHtml(imageVideoPrompt)}</pre>
    </section>
    <section class="output-section">
      <h3>6. Dialogue / Narration Prompt</h3>
      <pre>${escapeHtml(dialoguePrompt)}</pre>
    </section>
  `;
}

function generate() {
  const values = applyPreset();
  renderOutput(values);
}

renderFields();
document.querySelector("#역사_주제").addEventListener("change", () => {
  syncCustomSubjectVisibility();
  generate();
});
document.querySelector("#custom-subject").addEventListener("input", generate);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  generate();
});

document.querySelector("#reset-button").addEventListener("click", () => {
  form.reset();
  syncCustomSubjectVisibility();
  generate();
});

document.querySelector("#copy-button").addEventListener("click", async () => {
  const text = output.innerText.trim();
  await navigator.clipboard.writeText(text);
  document.querySelector("#copy-button").textContent = "복사 완료";
  setTimeout(() => {
    document.querySelector("#copy-button").textContent = "결과 복사";
  }, 1300);
});

generate();
