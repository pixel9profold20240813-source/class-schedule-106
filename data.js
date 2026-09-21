// 課表資料 — 桃園市立陽明高級中等學校 106班 115學年度第1學期
// 節次時間與每節課程內容，依上傳的課表圖片建立
const SCHOOL_INFO = {
  school: "桃園市立陽明高級中等學校",
  term: "115學年度 第1學期",
  className: "106",
  teacher: "翁子涵",
};

// weekday: 1=一(週一) ... 5=五(週五)，對應 JS Date.getDay() 的 1~5
const PERIODS = [
  { id: "s1", label: "第一節", start: "08:10", end: "09:00" },
  { id: "s2", label: "第二節", start: "09:10", end: "10:00" },
  { id: "s3", label: "第三節", start: "10:10", end: "11:00" },
  { id: "s4", label: "第四節", start: "11:10", end: "12:00" },
  { id: "s5", label: "第五節", start: "13:00", end: "13:50" },
  { id: "s6", label: "第六節", start: "14:00", end: "14:50" },
  { id: "s7", label: "第七節", start: "15:05", end: "15:55" },
  { id: "s8", label: "第八節", start: "16:00", end: "16:50" },
];

// SCHEDULE[periodId][weekday] = { subject, teacher }
const SCHEDULE = {
  s1: {
    1: { subject: "地球科學", teacher: "郭佳甄" },
    2: { subject: "歷史", teacher: "邱威智" },
    3: { subject: "地理", teacher: "游子瑩" },
    4: { subject: "先備課程", teacher: "翁子涵" },
    5: { subject: "英語文", teacher: "張秀薇" },
  },
  s2: {
    1: { subject: "生命教育", teacher: "徐雨堤" },
    2: { subject: "數學", teacher: "游俊雄" },
    3: { subject: "數學", teacher: "游俊雄" },
    4: { subject: "彈性充補", teacher: "黃美玲" },
    5: { subject: "體育", teacher: "李冠葳" },
  },
  s3: {
    1: { subject: "多元選修", teacher: "江和育 王昱凱" },
    2: { subject: "化學", teacher: "林士倫" },
    3: { subject: "化學", teacher: "林士倫" },
    4: { subject: "數學", teacher: "游俊雄" },
    5: { subject: "團體活動", teacher: "" },
  },
  s4: {
    1: { subject: "多元選修", teacher: "江和育 王昱凱" },
    2: { subject: "地理", teacher: "游子瑩" },
    3: { subject: "英語文", teacher: "張秀薇" },
    4: { subject: "國文", teacher: "翁子涵" },
    5: { subject: "團體活動", teacher: "" },
  },
  s5: {
    1: { subject: "歷史", teacher: "邱威智" },
    2: { subject: "數學", teacher: "游俊雄" },
    3: { subject: "行腳桃花源", teacher: "林心儀 黃保銜" },
    4: { subject: "英語文", teacher: "張秀薇" },
    5: { subject: "班級活動", teacher: "翁子涵" },
  },
  s6: {
    1: { subject: "美術", teacher: "陳建榮" },
    2: { subject: "國文", teacher: "翁子涵" },
    3: { subject: "行腳桃花源", teacher: "林心儀 黃保銜" },
    4: { subject: "國文", teacher: "翁子涵" },
    5: { subject: "地球科學", teacher: "郭佳甄" },
  },
  s7: {
    1: { subject: "英語文", teacher: "張秀薇" },
    2: { subject: "體育", teacher: "李冠葳" },
    3: { subject: "國文", teacher: "翁子涵" },
    4: { subject: "健康與護理", teacher: "李蕙君" },
    5: { subject: "美術", teacher: "陳建榮" },
  },
  s8: {
    1: { subject: "國文輔導課", teacher: "翁子涵" },
    2: { subject: "讀書輔導", teacher: "翁子涵" },
    3: { subject: "英文輔導課", teacher: "張秀薇" },
    4: null,
    5: null,
  },
};

const WEEKDAY_LABELS = { 1: "一", 2: "二", 3: "三", 4: "四", 5: "五" };
