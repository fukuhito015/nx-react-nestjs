# NxChallenge

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **このワークスペースは[Nx, Smart Monorepos · Fast CI.](https://nx.dev)によって生成されました** ✨

## エディタとの統合

[Nx Console](https://nx.dev/nx-console)をお気に入りのエディタにインストールして、Nx の体験を向上させましょう。Nx Console は、プロジェクトの表示、タスクの実行、コードの生成など、インタラクティブな UI を提供します。VSCode、IntelliJ に対応しており、Vim ユーザーのための LSP も用意されています。

## アプリケーションの起動

`npx nx serve frontend`を実行して、開発サーバーを起動します。楽しいコーディングを！

## 本番環境用のビルド

`npx nx build frontend`を実行して、アプリケーションをビルドします。ビルド成果物は出力ディレクトリ（例：`dist/`や`build/`）に保存され、デプロイの準備が整います。

## タスクの実行

Nx を使用してタスクを実行するには、次の構文を使用します：

```
npx nx <target> <project> <...options>
```

複数のターゲットを実行することもできます：

```
npx nx run-many -t <target1> <target2>
```

また、特定のプロジェクトをフィルタリングするために`-p`を追加することもできます

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

ターゲットは`package.json`または`projects.json`に定義できます。詳細は[ドキュメント](https://nx.dev/features/run-tasks)をご覧ください。

## CI の設定

Nx にはローカルキャッシュが組み込まれています（`nx.json`をチェックしてください）。CI 環境では、さらに一歩進んだ設定が求められるかもしれません。

- [リモートキャッシュの設定](https://nx.dev/features/share-your-cache)
- [複数マシンにまたがるタスク分散の設定](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [CI の設定について詳しく学ぶ](https://nx.dev/recipes/ci)

## プロジェクトグラフの探索

`npx nx graph`を実行して、ワークスペースのグラフを表示します。
Nx で実行できるタスクが表示されます。

- [プロジェクトグラフの探索についてもっと学ぶ](https://nx.dev/core-features/explore-graph)

## 私たちとつながりましょう！

- [コミュニティに参加する](https://nx.dev/community)
- [Nx の YouTube チャンネルを購読する](https://www.youtube.com/@nxdevtools)
- [Twitter でフォローする](https://twitter.com/nxdevtools)
