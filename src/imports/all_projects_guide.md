# 全プロジェクト完全技術解説書

面接や技術的な議論の場において、自身のプロジェクトについて「困ることなく」「技術要素を盛りだくさんに」説明するためのリファレンスです。
各プロジェクトについて、**概要**、**技術スタック**、**アーキテクチャ**、**実装のこだわり（Why）**、そして**ローカルでの確認方法**をまとめています。

---

## 目次

1. [AGN (Antigravity-Native)](#1-agn-antigravity-native) - 自作プログラミング言語
2. [Nue](#2-nue) - AI動画編集プラットフォーム
3. [Auto Director](#3-auto-director) - AIエージェント向け動画生成
4. [DreamCatcher](#4-dreamcatcher) - 自律型AIアシスタント
5. [Enludus Ego](#5-enludus-ego) - Local-First AI Digital Twin
6. [Preplay](#6-preplay) - コンテキスト認識型遊び提案
7. [Kotodama](#7-kotodama) - AI Writing Partner
8. [EnCura](#8-encura) - AI Museum Guide
9. [Amu](#9-amu) - AI PRエージェント
10. [Sovereign](#10-sovereign) - AI-Native Solana Executor
11. [Vidnitive (My Language Dojo)](#11-vidnitive-my-language-dojo) - YouTube語学学習
12. [Covenant](#12-covenant) - 議事録AI
13. [StudyReel](#13-studyreel) - iOS学習タイマー
14. [Logos](#14-logos) - AIスライド生成
15. [LifeHack Alchemist](#15-lifehack-alchemist) - 科学RPG
16. [KoeTekt](#16-koetekt) - AI Spatial Architect
17. [Mirutabi](#17-mirutabi) - 旅行SNS

---

## 1. AGN (Antigravity-Native)

**"AI becomes the Intelligence, GPU becomes the Wings."**
日本語と英語を等価に扱う、世界初のAI-Native多言語プログラミング言語。

### 📍 Local Path
`cd ~/ludus/agn`

### 🛠 Tech Stack
- **Core Language**: Rust (Edition 2021)
- **Runtime**: Tokio (Async), Rayon (Parallelism)
- **Graphics**: wgpu (WebGPU based rendering)
- **Architecture**: Bridge Pattern, Zero-Cost Abstractions

### 🧠 Architecture
コアロジック（解釈・実行）を環境（Native/Web）から完全に切り離す「Bridge Pattern」を採用。

```mermaid
graph LR
    UserCode[ユーザーコード (AGN)] --> Lexer
    Lexer --> Parser
    Parser --> AST[Unified AST]
    AST --> Intepreter[Core Interpreter]
    
    subgraph "Bridge Architecture"
        Intepreter -- "Graphics Call" --> BridgeTrait{Bridge Trait}
        BridgeTrait --> NativeImpl[Native (Winit/WGPU)]
        BridgeTrait --> WasmImpl[Wasm (Canvas/WGPU)]
        BridgeTrait --> MockImpl[Mock (Test)]
    end
```

### 💎 実装のこだわり (The "Why")
1.  **Bridge Patternによる環境抽象化**:
    -   **課題**: 当初、インタープリタ内にファイルI/Oやウィンドウ生成コードが混在し、Wasm化する際に条件付きコンパイル(`#[cfg]`)だらけになり可読性が崩壊した。
    -   **解決**: `Bridge` トレイを定義し、副作用（画面描画、音声、時間取得）を全てインターフェース経由で行うようリファクタリング。「Coreは環境を知らない」状態を作り出し、Native/Web/Test環境で同一のコアロジックを動作させている。

2.  **Multilingual AST**:
    -   **実装**: 日本語（SOV: `X を 表示する`）と英語（SVO: `Show X`）を、Parser段階で同一の抽象構文木（AST）ノードに変換。実行時には言語の違いは消滅する。これにより「英語で書いて日本語でデバッグ」といった柔軟な開発体験を実現。

3.  **Rustの並列性活用**:
    -   `interpreter.rs` 内で `Tokio` の非同期ランタイムを活用し、`imagine` などの重いAI推論タスクをノンブロッキングで実行。UIスレッド（60fps）を阻害しない設計。

---

## 2. Nue

**"AI Video Alchemy Platform"**
Raw映像素材をトレンドに合わせて自動編集するマイクロサービス群。

### 📍 Local Path
`cd ~/nue`

### 🛠 Tech Stack
| Service | Lang/Tech | Role |
|:---|:---|:---|
| **Gateway** | Go (Gin) | 高速アップロード・リクエスト受付 |
| **Brain** | Python, Gemini 2.5 | 映像分析・構成指示 (JSON生成) |
| **Muscle** | Rust, FFmpeg | 動画レンダリング・フィルタ処理 |
| **Infra** | Docker Compose | オーケストレーション |

### 🧠 Architecture
言語ごとの特性を活かしたマイクロサービス構成。

```mermaid
graph TD
    Client -->|Upload| Gateway[Gateway (Go)]
    Gateway -->|Save| Volume[(Shared Volume)]
    Gateway -->|Notify| Brain[Brain (Python)]
    
    Brain -->|Analyze (Gemini)| API[Gemini API]
    Brain -->|Edit Instructions| Volume
    Brain -->|Trigger| Muscle[Muscle (Rust)]
    
    Muscle -->|Read Instructions| Volume
    Muscle -->|FFmpeg Rendering| Output[MP4 File]
```

### 💎 実装のこだわり
1.  **適材適所の言語選定**:
    -   **Go**: I/OバウンドなGatewayには、ゴルーチンによる軽量並行処理が得意なGoを採用。
    -   **Python**: AIライブラリが豊富なPythonを頭脳（Brain）に。
    -   **Rust**: CPUバウンドな動画エンコードには、C++並みの速度とメモリ安全性を持つRust（Muscle）を採用。

2.  **Muscle (Rust) の堅牢性**:
    -   FFmpegのフィルタグラフは複雑でエラーが起きやすい。Rustの型システムでフィルタの接続ルールを強制し、実行時エラーをコンパイル時に検知できるようにした。また、`drop` トレイトを用いて一時ファイルの後始末を自動化し、リソースリークを防いでいる。

---

## 3. Auto Director

**"The Agentic Video Generation Framework"**
AIエージェントが自律的にリポジトリを読み、CM動画を監督・生成するフレームワーク。

### 📍 Local Path
`cd ~/auto_director`

### 🛠 Tech Stack
- **Lang**: TypeScript
- **Engine**: Remotion (React-based Video Rendering)
- **Protocol**: MCP (Model Context Protocol) Server
- **UI**: Generative UI

### 💎 実装のこだわり
1.  **Agentic Workflow (MCP)**:
    -   人間がGUIを操作するのではなく、「AIエージェントがツールとして呼び出す」ことを前提に設計。MCPサーバーとして実装することで、ClaudeやWindsurfが自律的に `generate_commercial` ツールを実行できる。
    -   AIはビデオ編集ソフトの使い方は知らないが、JSONの書き方は知っている。そこで、動画の構成指示書を `director.json` というスキーマに落とし込み、AIにはJSONを書かせるだけで完結するインターフェースを設計した。

2.  **Hybrid Template Engine**:
    -   「AIによる完全生成」は不安定（ハルシネーション）。そこで、映像の骨組み（テンプレート）はRemotionで堅牢に組み、中身のテキストや色だけをAIに変えさせる「ハイブリッド方式」を採用。品質と柔軟性を両立。

---

## 4. DreamCatcher

**"Autonomous AI Executive Assistant"** (Hackathon Project)
AIが自律的にユーザーのコンテキストを理解し、アクションを「提案」するライフマネージャー。

### 📍 Local Path
`cd ~/task-management`

### 🛠 Tech Stack
- **Frontend**: Next.js 15 (App Router)
- **Backend**: FastAPI (Python)
- **Async**: Celery + Redis
- **Database**: PostgreSQL + pgvector (RAG)
- **AI**: Gemini 2.0

### 💎 実装のこだわり
1.  **Human-in-the-Loop Philosophy**:
    -   AIのエージェント化における最大のリスクは「暴走」。DreamCatcherは**「提案は自律的だが、実行は許可制」**という哲学をシステムにコードとして実装。全てのアクションは `WAITING_APPROVAL` ステートで止まり、ユーザーの承認（APIコール）がないと物理的に実行されないロック機構を持つ。

2.  **RAG Pipeline**:
    -   Gmail, Slack, Calendar等の非構造データを `pgvector` に取り込み、ベクター検索で「今のユーザーの状況」に関連するコンテキストを抽出。これにより「空気を読んだ」提案が可能になる。

---

## 5. Enludus Ego

**"Your life, one intelligence."**
ローカルファーストのAI Digital Twin。

### 📍 Local Path
`cd ~/enludus_ego`

### 🛠 Tech Stack
- **Hub**: Rust (File Watching)
- **Engine**: Python, MLX (Apple Silicon logic)
- **UI**: Rust (Ratatui TUI)
- **Model**: DeepSeek-R1-Distill (4bit Quantized)

### 💎 実装のこだわり
1.  **Bio-inspired Architecture**:
    -   **Hub (Rust)** = 神経系。ファイル変更をミリ秒単位で感知し、Signal（パルス）を送る。
    -   **Engine (Wait)** = 脳。パルスを受け取り、コンテキストを統合して思考する。
    -   この分離により、常に重いAIモデルを回すのではなく、変化があった時だけ思考する「省電力・省メモリ」な設計を実現（MacBook Air 8GBで動作可能）。

2.  **Context Fusion**:
    -   **Technical Context** (AGNコードなど) と **Emotional Context** (日記のMarkdownなど) の異なるデータソースを融合。技術的な行き詰まりと感情的な焦りを相関させてアドバイスする。

---

## 6. Preplay

**"遊びを選ぶ時間を、ゼロにする。"**
コンテキスト認識型即興遊び提案アプリ。

### 📍 Local Path
`cd ~/preplay`

### 🛠 Tech Stack
- **Frame**: Flutter (Dart)
- **State**: Provider
- **Sensor**: Sensor Fusion (Mock in MVP)

### 💎 実装のこだわり
-   **Zero-UI**:
    -   起動した瞬間に提案画面が表示される。メニューや設定を極限まで排除し、「迷う時間」自体を無くすUX設計。
    -   内部的には `PreplayController` が起動と同時に非同期でコンテキスト（時間、場所）を取得・判定し、最適な遊びをフィルタリングしている。

---

## 7. Kotodama

**"言葉に、魂を宿す。"**
AI Writing Partner。禅エディタ × 感情分析。

### 📍 Local Path
`cd ~/kotodama`

### 🛠 Tech Stack
- **App**: Next.js 14
- **AI**: Gemini 2.5 Flash
- **Style**: Tailwind CSS, Framer Motion

### 💎 実装のこだわり
-   **Ambient Interface**:
    -   ユーザーの執筆を邪魔しないよう、AIの分析結果（感情スコアなど）を数値やグラフではなく「背景色の変化（アンビエント）」としてフィードバック。Reactの状態管理とCSS Transitionを組み合わせ、滑らかな色の変化を実現。

---

## 8. EnCura

**"AI Museum Guide"**
AI学芸員アプリ。

### 📍 Local Path
`cd ~/encura`

### 🛠 Tech Stack
- **App**: Flutter
- **Backend**: Supabase (PostGIS)
- **Crawler**: GitHub Actions + Python

### 💎 実装のこだわり
-   **Serverless Crawler**:
    -   全国の展示会情報の更新を、サーバーを持たずに **GitHub Actions の Scheduled Workflow** で実現。毎朝9時にPythonスクリプトが走り、各美術館のサイトを巡回、Geminiで構造化データ(JSON)に変換し、SupabaseへUpsertする。運用コストゼロのデータパイプライン。

---

## 9. Amu

**"Code to Narrative"**
GitHubリポジトリから広報資産を編み出すAI。

### 📍 Local Path
`cd ~/amu`

### 🛠 Tech Stack
- **App**: Flutter
- **AI**: Gemini 1.5 Pro (Multi-Agent)

### 💎 実装のこだわり
-   **Multi-Agent Coordination**:
    -   単一のプロンプトではなく、「CTOエージェント（技術分析）」「クリエイティブディレクター（構成作家）」「デザイナー（UI再現）」の3つのAI人格を定義し、それぞれが対話しながらアウトプットを作るパイプラインを構築。

---

## 10. Sovereign

**"AI-Native Solana Executor"**
Solanaブロックチェーン上の自律トレードボット。

### 📍 Local Path
*(Repository not found locally, based on GitHub info)*

### 🛠 Tech Stack
- **Common**: Python (Oracle/Brain)
- **Executor**: Rust (Solana Transaction)
- **Chain**: Solana Mainnet

### 💎 実装のこだわり
-   **Muscle memory (Rust)**:
    -   トレードの意思決定（Python）と実行（Rust）を分離。秘密鍵の署名やトランザクション送信といったクリティカルな処理は、メモリ安全で高速なRustバイナリ内に閉じることで、セキュリティと速度（レイテンシー）を最大化した。

---

## 11. Vidnitive (My Language Dojo)

**"YouTube × AI語学学習"**

### 📍 Local Path
`cd ~/my-language-platform`

### 🛠 Tech Stack
- Next.js, Supabase, Gemini 1.5 Flash

---

## 12. Covenant

**"議事録AI"**

### 📍 Local Path
`cd ~/covenant`

### 🛠 Tech Stack
- TypeScript, Gemini 2.0 (Multimodal Audio)

---

## 13. StudyReel

**"Interactive Study Timer"**

### 📍 Local Path
`cd ~/StudyTimerAndVideo`

### 🛠 Tech Stack
- Swift, SwiftUI, WidgetKit, SwiftData

### 💎 実装のこだわり
- **Interactive Widget**:
    - iOS 17の新機能であるインタラクティブウィジェットを採用。アプリを開かずにホーム画面からポモドーロタイマーを開始できる。`AppIntent` を活用した最新のiOS開発手法。

---

## 14. Logos

**"Structure your Thoughts"**

### 📍 Local Path
`cd ~/logos`

### 🛠 Tech Stack
- Next.js, Vercel AI SDK

---

## 15. LifeHack Alchemist

**"Science RPG"**

### 📍 Local Path
`cd ~/lifehackAlchemist`

### 🛠 Tech Stack
- React, Vite, Gemini (Physics Simulation)

---

## 16. KoeTekt

**"AI Spatial Architect"**

### 📍 Local Path
`cd ~/KoeTekt`

### 🛠 Tech Stack
- React Three Fiber, Rapier (Physics), Electron

### 💎 実装のこだわり
- **Text-to-3D Scene**:
    - LLMの出力をECS（Entity Component System）のようなJSONデータに変換し、React Three Fiberで動的にコンポーネントをマウントすることで、テキストから3Dシーンを構築。

---

## 17. Mirutabi

**"Visual Journey Archive"**

### 📍 Local Path
`cd ~/mirutabi`

### 🛠 Tech Stack
- Next.js, Mapbox GL JS, Go (Analytics Service)

---
