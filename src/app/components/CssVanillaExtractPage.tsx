import { Link } from 'react-router-dom';
import { ArrowLeft, Paintbrush, Code, Shield } from 'lucide-react';

export default function CssVanillaExtractPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study/css" 
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          CSSページに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <Paintbrush className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">vanilla-extract</h1>
          <p className="text-xl text-gray-600">
            vanilla-extractは、TypeScriptでCSSを記述できる型安全なCSS-in-JSライブラリです。
            ゼロランタイムで、ビルド時に静的なCSSファイルを生成します。
          </p>
        </div>

        {/* vanilla-extractとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Paintbrush className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">vanilla-extractとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              vanilla-extractは、TypeScriptでCSSを記述し、ビルド時に静的なCSSファイルを生成するライブラリです。
              ランタイムオーバーヘッドがなく、型安全で、CSS Modulesのような名前空間の分離が自動で行われます。
            </p>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 mb-6">
              <h4 className="text-xl mb-3 text-gray-900">vanilla-extractの特徴</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>ゼロランタイム：</strong>ビルド時に静的CSSを生成、ランタイムコストなし</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>型安全：</strong>TypeScriptで型チェック、IDE補完</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>スコープ分離：</strong>自動的にクラス名をハッシュ化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>CSS変数：</strong>TypeScriptで定義したテーマを使用</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>最適化：</strong>未使用スタイルの自動削除</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">インストール</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`# npm
npm install @vanilla-extract/css

# Vite の場合
npm install -D @vanilla-extract/vite-plugin

# vite.config.ts
import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
});

# webpack の場合
npm install -D @vanilla-extract/webpack-plugin`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 基本的な使い方 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Code className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">基本的な使い方</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">スタイルの定義</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// button.css.ts
import { style } from '@vanilla-extract/css';

// 基本的なスタイル
export const button = style({
  backgroundColor: '#3b82f6',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 600,
  transition: 'all 0.2s',
  
  ':hover': {
    backgroundColor: '#2563eb',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  
  ':active': {
    transform: 'translateY(0)',
  },
  
  ':disabled': {
    backgroundColor: '#d1d5db',
    cursor: 'not-allowed',
  },
});

// バリエーション
export const primaryButton = style({
  backgroundColor: '#3b82f6',
});

export const secondaryButton = style({
  backgroundColor: '#6b7280',
});

export const dangerButton = style({
  backgroundColor: '#ef4444',
});

// Button.tsx
import * as styles from './button.css';

export function Button({ children }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">複数のスタイルを組み合わせ</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// styles.css.ts
import { style } from '@vanilla-extract/css';

export const base = style({
  padding: '12px',
  borderRadius: '8px',
});

export const primary = style({
  backgroundColor: 'blue',
  color: 'white',
});

export const large = style({
  padding: '16px 32px',
  fontSize: '18px',
});

// Component.tsx
import * as styles from './styles.css';
import classNames from 'classnames';

function Component() {
  return (
    <div className={classNames(styles.base, styles.primary, styles.large)}>
      Hello
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* テーマとCSS変数 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Shield className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">テーマとCSS変数</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">テーマの定義</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// theme.css.ts
import { createTheme, createThemeContract } from '@vanilla-extract/css';

// テーマコントラクトの定義
export const vars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    text: null,
    background: null,
  },
  spacing: {
    small: null,
    medium: null,
    large: null,
  },
  fontSize: {
    small: null,
    medium: null,
    large: null,
  },
});

// ライトテーマ
export const lightTheme = createTheme(vars, {
  color: {
    primary: '#3b82f6',
    secondary: '#10b981',
    text: '#1f2937',
    background: '#ffffff',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  fontSize: {
    small: '14px',
    medium: '16px',
    large: '20px',
  },
});

// ダークテーマ
export const darkTheme = createTheme(vars, {
  color: {
    primary: '#60a5fa',
    secondary: '#34d399',
    text: '#f9fafb',
    background: '#1f2937',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  fontSize: {
    small: '14px',
    medium: '16px',
    large: '20px',
  },
});

// styles.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const container = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  padding: vars.spacing.medium,
  fontSize: vars.fontSize.medium,
});

export const button = style({
  backgroundColor: vars.color.primary,
  color: '#ffffff',
  padding: \`\${vars.spacing.small} \${vars.spacing.medium}\`,
  borderRadius: '8px',
});

// App.tsx
import { lightTheme, darkTheme } from './theme.css';
import * as styles from './styles.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div className={isDark ? darkTheme : lightTheme}>
      <div className={styles.container}>
        <button 
          className={styles.button}
          onClick={() => setIsDark(!isDark)}
        >
          テーマ切り替え
        </button>
      </div>
    </div>
  );
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">グローバルCSS変数</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// global.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#3b82f6',
    secondary: '#10b981',
  },
  space: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
});

// 使用例
import { style } from '@vanilla-extract/css';
import { vars } from './global.css';

export const button = style({
  backgroundColor: vars.color.primary,
  padding: vars.space.md,
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* レスポンシブデザイン */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Code className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">レスポンシブデザイン</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// breakpoints.css.ts
export const breakpoints = {
  mobile: 'screen and (max-width: 768px)',
  tablet: 'screen and (min-width: 769px) and (max-width: 1024px)',
  desktop: 'screen and (min-width: 1025px)',
};

// styles.css.ts
import { style } from '@vanilla-extract/css';
import { breakpoints } from './breakpoints.css';

export const container = style({
  width: '100%',
  padding: '16px',
  
  '@media': {
    [breakpoints.mobile]: {
      padding: '8px',
    },
    [breakpoints.tablet]: {
      padding: '12px',
      maxWidth: '768px',
    },
    [breakpoints.desktop]: {
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '16px',
  
  '@media': {
    [breakpoints.tablet]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [breakpoints.desktop]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
    },
  },
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Recipes（バリエーション） */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Shield className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Recipes（バリエーション）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Recipesを使うことで、複数のバリエーションを持つコンポーネントを型安全に定義できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// button.css.ts
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.2s',
  },
  
  variants: {
    color: {
      primary: {
        backgroundColor: '#3b82f6',
        color: 'white',
      },
      secondary: {
        backgroundColor: '#6b7280',
        color: 'white',
      },
      danger: {
        backgroundColor: '#ef4444',
        color: 'white',
      },
    },
    
    size: {
      small: {
        padding: '8px 16px',
        fontSize: '14px',
      },
      medium: {
        padding: '12px 24px',
        fontSize: '16px',
      },
      large: {
        padding: '16px 32px',
        fontSize: '18px',
      },
    },
    
    rounded: {
      true: {
        borderRadius: '9999px',
      },
      false: {
        borderRadius: '8px',
      },
    },
  },
  
  compoundVariants: [
    {
      variants: {
        color: 'primary',
        size: 'large',
      },
      style: {
        textTransform: 'uppercase',
      },
    },
  ],
  
  defaultVariants: {
    color: 'primary',
    size: 'medium',
    rounded: false,
  },
});

// Button.tsx
import { button } from './button.css';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  children: React.ReactNode;
}

export function Button({ color, size, rounded, children }: ButtonProps) {
  return (
    <button className={button({ color, size, rounded })}>
      {children}
    </button>
  );
}

// 使用例
<Button color="primary" size="large" rounded>
  送信
</Button>

<Button color="danger" size="small">
  削除
</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Sprinkles（ユーティリティ） */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Code className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Sprinkles（ユーティリティクラス）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Sprinklesは、Tailwind CSSのようなユーティリティクラスを型安全に生成できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// sprinkles.css.ts
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '8px',
  medium: '16px',
  large: '24px',
};

const colors = {
  blue: '#3b82f6',
  red: '#ef4444',
  gray: '#6b7280',
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline-block'],
    flexDirection: ['row', 'column'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    alignItems: ['flex-start', 'center', 'flex-end', 'stretch'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

const colorProperties = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

// Component.tsx
import { sprinkles } from './sprinkles.css';

function Component() {
  return (
    <div className={sprinkles({
      display: 'flex',
      flexDirection: { mobile: 'column', desktop: 'row' },
      padding: 'large',
      backgroundColor: 'blue',
      color: 'white',
    })}>
      Hello
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 実用例 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Paintbrush className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">実用例</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// card.css.ts
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const card = style({
  backgroundColor: vars.color.background,
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  transition: 'all 0.3s',
  
  ':hover': {
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-4px)',
  },
});

export const cardHeader = style({
  padding: vars.spacing.medium,
  borderBottom: \`1px solid \${vars.color.border}\`,
});

export const cardTitle = style({
  fontSize: vars.fontSize.large,
  fontWeight: 700,
  color: vars.color.text,
  margin: 0,
});

export const cardContent = style({
  padding: vars.spacing.medium,
  color: vars.color.text,
});

export const cardFooter = style({
  padding: vars.spacing.medium,
  borderTop: \`1px solid \${vars.color.border}\`,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.spacing.small,
});

// Card.tsx
import * as styles from './card.css';

interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ title, children, footer }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <div className={styles.cardContent}>
        {children}
      </div>
      {footer && (
        <div className={styles.cardFooter}>
          {footer}
        </div>
      )}
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              vanilla-extractは、TypeScriptでCSSを記述し、ビルド時に静的なCSSファイルを生成します。
              ゼロランタイムで型安全、CSS Modulesのような名前空間の分離が自動で行われます。
            </p>
            <p>
              Recipes、Sprinkles、テーマシステムなど、強力な機能を備えており、
              大規模なプロジェクトでも保守しやすいスタイルシステムを構築できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-purple-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            CSSの学習を完了したら、次はJavaScript/TypeScriptを学びましょう！
          </p>
          <Link 
            to="/study/javascript"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            JavaScript/TypeScriptを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
