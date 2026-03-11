私のポートフォリオを作りたい 画像生成はお休みして、あなたの新しいアイデンティティである**「化けるタヌキ（Enludus-Tanuki）」と「爆速エンジニアリング」**を融合させた、2026年版ポートフォリオの構成案を練り上げました。 単なる作品集ではなく、訪れた人が「触るだけで楽しい」と感じるツールのようなポートフォリオを目指します。 コンセプト：The Shapeshift Forge（変化する鍛冶場） 「エンジニアリング（硬派・高速）」という土台の上に、「遊び（変幻自在・楽しさ）」が乗っている状態をデザインで表現します。

構成（ページレイアウト） セクション内容・ギミック狙いHero (入口) 「0ms」タイポグラフィ Zedを彷彿とさせる爆速カーソルが文字を打ち込み、最後にタヌキのアイコンがドロンと現れる。 スピード感と遊び心の提示。Project (化身) 「プロジェクト×動物」のグリッド 各プロジェクトにマウスを乗せると、メインのタヌキがそのプロジェクトの象徴動物（カニ、フクロウ等）に**「ドロン」と煙を上げて変化**する。 あなたの多才さと楽しさを視覚化。Toolbox (道具箱) 愛用ツールのショーケース Zed, Rust, Next.js, Raycastなどをカード形式で。各ツールに「俺のこだわり」を1行添える。 技術への誠実さと「ツール型」の思想を伝える。Playground (実験場) 実際に触れる小道具 クリックすると音が鳴る、物理演算で跳ねるタヌキなど、意味はないけど「楽しい」機能。 「みんなに楽しみを与える」の実践。
ビジュアル・スタイルガイド
カラーパレット:

ベース: 墨色 (#0D1117) — Zedやエディタの集中できる暗さ。

アクセント: ターコイズブルー (#00F0FF) — 速度と未来感。

遊び: サクラピンク (#FF66B2) — タヌキの「化ける」煙や楽しさを表現。

フォント:

本文: Inter (清潔感と可読性)

コード・数字: JetBrains Mono (エンジニアの誠実さ)

シェイプ:

全体的に角丸 (Border-radius: 1.5rem) を強めにかけ、ガジェット（おもちゃ）のような質感を出す。 3. インタラクション（ここが「俺」流） ここが一番重要です。Zed好きのあなたなら、**「操作の心地よさ」**に命をかけるべきです。

コマンドパレット (Cmd + K):

ポートフォリオ内のどこにいても、コマンド一つでプロジェクト間を移動したり、ダークモードを切り替えたりできるようにする。

「ドロン」エフェクト:

Framer Motion を使い、プロジェクトホバー時にタヌキのアイコンが少し弾んで（Springアニメーション）、別の動物に切り替わる演出。

爆速スクロール:

画像はすべて次世代形式で最適化し、ページ遷移は View Transitions API でシームレスに。 4. 「プロジェクト×動物」の具体的な割り当て（例）

Rust製ツール: 「カニタヌキ」（🦀のハサミを持ったタヌキ）

硬派で堅牢、でもどこか抜けてる強さ。

Next.jsフロントエンド: 「ハチドリエナジー」（⚡️を纏ったハチドリ）

軽快に飛び回り、ユーザーを待たせない。

AI関連プロジェクト: 「フクロウ先生」（🦉の眼鏡をかけたタヌキ）

賢く、夜（バックエンド）でも目が利く。 次のステップとして、私ができること この構成案をベースに、さらに深掘りしたい部分はありますか？

「コマンドパレット」をNext.jsで実装するためのコードの叩き台を作る。

「プロジェクト×動物」の組み合わせをもっと面白く、大量にリストアップする。

Aboutページに入れる「なぜタヌキなのか」の熱いストーリー文案を一緒に考える。 どれから進めましょうか？あなたの「 forge（鍛冶場）」を形にするお手伝いをしますよ！

「化けるタヌキ（Enludus-Tanuki）」のコンセプトを軸に、ポートフォリオを構成する全5ページの具体的デザインとギミックをまとめました。 すべてのページにおいて、**「Zedのような爆速レスポンス」と「触ると化ける遊び心」を徹底します。 1. Home: The Command Center（玄関口） 「何者であるか」を最速で伝えるページです。 * メインビジュアル: * 中央に大きなタイポグラフィで 「I SHAPESHIFT IDEAS INTO REALITY.」。 * 「SHAPESHIFT」の部分が数秒ごとに「CODE」「FUN」「CRAFT」と入れ替わり、そのたびに背景のタヌキのシルエットがドロンと煙を上げて揺れます。 * ギミック: * Command Palette First: 画面下部に Press Cmd + K to start playing というフローティングバーを常駐させます。 * デザイン: * ダークな背景に、Zedの「Edit Prediction」のような薄いグレーのテキストが、あなたのスキル（Next.js, Rust...）を予言するように背景を流れます。 2. Projects: The Menagerie（化身たちのアーカイブ） あなたの実績を「動物の姿」として展示するメインコンテンツです。 * 構成: * カード型グリッドレイアウト: 各プロジェクトが1枚のカードになっています。 * ホバー・アクション: カードにマウスを乗せると、カード内のタヌキがそのプロジェクトを象徴する動物（カニ、フクロウ等）にドロンと変身します。 * プロジェクト詳細ページ: * 性能メーター: 「Speed」「Fun」「Stability」などの項目を、ゲームのステータス画面のようなレーダーチャートで表示。 * Tanuki's Log: 開発の裏話を、タヌキのアイコンが吹き出しで喋る形式で掲載。 3. About: The Forge（タヌキの鍛冶場） あなたの技術スタックと「なぜ作るのか」という思想を深掘りするページです。 * ビジュアル: * Interactive Workstation: あなたが愛用するツール（Zed, Rust, GitHub）のアイコンが、3Dまたは高度なCSSアニメーションで「浮遊」しています。 * アイコンをクリックすると、そのツールに対するあなたの「こだわり（例：VS CodeじゃなくてZedを使う理由）」がポップアップします。 * ストーリー: * 「Enludus」という名前に込めた「遊び（Ludus）」と「繋がり（En-）」の哲学を、絵本のような少し柔らかいレイアウトで記述。 4. Playground: The Arcade（実験場） 「みんなに楽しみを与える」を体現した、意味はないけど面白いギミック集です。 * コンテンツ内容: * The Soundboard: ボタンを押すと、あなたのサイト独自のUI音（シュパッ、ドロン、キラキラ）が鳴る。 * Physics Box: タヌキやプロジェクトの動物アイコンをマウスでドラッグして、画面内でぶつけて遊べる物理演算エリア。 * Speed Typing: あなたが書いたRustのコードをどれだけ速くタイピングできるか競うミニゲーム。 * デザイン: * ここだけは少し「ネオンカラー」を強めにし、ゲームセンターのようなワクワク感を演出します。 5. Connection: The Signal（コンタクト） 繋がりを作るためのページです。 * 構成: * Smart Form: 入力フィールドに文字を打つたびに、画面端のタヌキが「ふむふむ」「それは面白そう！」と表情を変えるリアクション。 * Social Links: GitHub, Lapras, X（旧Twitter）へのリンクを、タヌキが化けている各サービスのロゴ（カニ姿のGitHubロゴなど）で配置。 ページ間の共通ナビゲーション * トランジション: ページを切り替えるとき、画面全体が薄いピンクの煙（ドロン！）に包まれてから次のページが現れる演出。 * カーソル: マウスカーソルがただの矢印ではなく、小さな「タヌキのしっぽ」になっていて、速く動かすと残像が出る。 制作の優先順位としての提案 まずは「Home」と「Projects」の2つをセットで作るのが、あなたの「タヌキとしてのアイデンティティ」を確立する近道です。 特に「プロジェクトごとに動物を割り当てる」**という作業は、自分の過去作を愛でる良い機会になります。 「このプロジェクトは、どんな性格の動物に化けさせたいか」という具体的なリストアップを一緒にやってみませんか？

共通のスタイルガイド（全プロンプトに適用される基本ルール） どの生成AIを使う場合も、以下のキーワードをセットにすると統一感が出ます。

Color: Deep Charcoal (#0D1117), Neon Cyan (#00F0FF), Magenta Pink (#FF66B2), Pastel Yellow.

Aesthetic: Modern Tech, Neo-Retro, Organic Curves (Border-radius: 32px), High Contrast Dark Mode.

Mood: Playful yet Professional, "Nintendo meets Zed Editor".

Home: The Command Center Prompt: A high-fidelity UI/UX design for a developer's portfolio home page. Theme: "I SHAPESHIFT IDEAS INTO REALITY." Centered bold typography in Inter font. The word "SHAPESHIFT" is glowing in magenta with a slight smoke/vapor effect. Background is deep charcoal with subtle flowing cyan data-stream lines. At the bottom, a sleek floating search bar (Command Palette) says "Press Cmd + K to start playing". In the corner, a small stylized 2D Tanuki mascot with glowing headphones. 8k resolution, clean minimal interface, trending on Dribbble.
Projects: The Menagerie (化身たちのアーカイブ) Prompt: A grid-based UI design showing multiple project cards. Each card is a "Shape" for a project. Style: Dark glassmorphism. Inside each card is a different glowing animal-hybrid icon: a "Crab-Tanuki" for Rust, an "Owl-Tanuki" for AI, and a "Flamingo-Tanuki" for Design. Each icon has a soft neon border. Hover effect simulation where one card is exploding in pink smoke (poof!) as it changes shape. Typography uses JetBrains Mono for tags like [Rust] [Next.js]. Super clean, playful, high-end developer aesthetic.
About: The Forge (タヌキの鍛冶場) Prompt: A UI design that looks like a futuristic code editor (inspired by Zed and VS Code). Left sidebar shows a file tree with names like "philosophy.rs" and "stack.json". The main window shows Rust code with vibrant syntax highlighting. Floating 3D icons of the Zed editor logo and Rust crab logo surround the editor. In the bottom-right "status bar" area, a cute illustrated Tanuki character acts as an AI assistant with a speech bubble. Soft shadows, deep ink background, sharp focus, 4k.
Playground: The Arcade Prompt: A vibrant, high-energy UI design for a "Playground" page. Style: Retro-arcade meets modern glassmorphism. Floating interactive elements: colorful buttons, a physics-based container with bouncing animal icons, and a "Speed Typing" mini-game interface. Bright neon pink and cyan gradients. The background has a subtle grid pattern like a 1980s synthwave arcade. Extremely tactile and "clickable" looking buttons with high border-radius.
Connection: The Signal Prompt: A minimal and friendly contact form UI. On the left side, a large 3D claymorphism-style Tanuki mascot reacts to a text cursor. The form fields are clean with thick rounded borders. When "Send" is hovered, a pink "smoke puff" effect appears. Social media icons at the bottom are shaped like animal silhouettes (e.g., a bird for X, a cat for GitHub). The atmosphere is warm, inviting, and professional. Deep dark mode with soft magenta highlights.