export interface Coordinator {
  name: string;
  role: string;
  contact: string;
}

export const clubCoordinators: Record<string, Coordinator[]> = {
  "1": [
    { name: "Akira Tanaka", role: "President", contact: "akira.tanaka@vssut.ac.in" },
    { name: "Yuki Sato", role: "Vice President", contact: "yuki.sato@vssut.ac.in" }
  ],
  "2": [
    { name: "Hiroshi Yamamoto", role: "President", contact: "hiroshi.yamamoto@vssut.ac.in" },
    { name: "Sakura Watanabe", role: "Secretary", contact: "sakura.watanabe@vssut.ac.in" }
  ],
  "3": [
    { name: "Kenji Nakamura", role: "President", contact: "kenji.nakamura@vssut.ac.in" },
    { name: "Rei Kobayashi", role: "Technical Lead", contact: "rei.kobayashi@vssut.ac.in" }
  ],
  "4": [
    { name: "Takeshi Suzuki", role: "Chairman", contact: "takeshi.suzuki@vssut.ac.in" },
    { name: "Mika Ito", role: "Vice Chairman", contact: "mika.ito@vssut.ac.in" }
  ],
  "5": [
    { name: "Ryu Takahashi", role: "Captain", contact: "ryu.takahashi@vssut.ac.in" },
    { name: "Nana Kimura", role: "Technical Head", contact: "nana.kimura@vssut.ac.in" }
  ],
  "6": [
    { name: "Hana Hayashi", role: "Lead Dancer", contact: "hana.hayashi@vssut.ac.in" },
    { name: "Kenta Ishii", role: "Choreographer", contact: "kenta.ishii@vssut.ac.in" }
  ],
  "7": [
    { name: "Daiki Morita", role: "President", contact: "daiki.morita@vssut.ac.in" },
    { name: "Emi Ogawa", role: "Design Head", contact: "emi.ogawa@vssut.ac.in" }
  ],
  "8": [
    { name: "Shota Kato", role: "Team Captain", contact: "shota.kato@vssut.ac.in" },
    { name: "Yui Matsumoto", role: "Technical Director", contact: "yui.matsumoto@vssut.ac.in" }
  ],
  "9": [
    { name: "Taro Yoshida", role: "Quizmaster", contact: "taro.yoshida@vssut.ac.in" },
    { name: "Ami Sasaki", role: "Research Head", contact: "ami.sasaki@vssut.ac.in" }
  ],
  "10": [
    { name: "Koji Fujita", role: "Team Lead", contact: "koji.fujita@vssut.ac.in" },
    { name: "Rina Nishida", role: "Strategy Head", contact: "rina.nishida@vssut.ac.in" }
  ],
  "11": [
    { name: "Sora Taniguchi", role: "Director", contact: "sora.taniguchi@vssut.ac.in" },
    { name: "Yuna Okamoto", role: "Lead Actor", contact: "yuna.okamoto@vssut.ac.in" }
  ],
  "12": [
    { name: "Kaito Shimizu", role: "Innovation Head", contact: "kaito.shimizu@vssut.ac.in" },
    { name: "Moe Yamazaki", role: "Project Manager", contact: "moe.yamazaki@vssut.ac.in" }
  ],
  "13": [
    { name: "Ryota Inoue", role: "CEO", contact: "ryota.inoue@vssut.ac.in" },
    { name: "Kana Takagi", role: "Business Head", contact: "kana.takagi@vssut.ac.in" }
  ]
};