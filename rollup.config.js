import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from 'rollup-plugin-terser';

export default {
  input: "./src/index.ts",
  output: [
    {
      file: 'build/dist/ui.cjs.js',
      format: 'cjs',
    },
    {
      file: 'build/dist/ui.cjs.min.js',
      format: 'cjs',
      plugins: [terser()],
    },
    {
      file: 'build/dist/ui.esm.js',
      format: 'es',
    },
    {
      file: 'build/dist/ui.esm.min.js',
      format: 'es',
      plugins: [terser()],
    },
    {
      dir: 'build',
      format: 'esm',
      sourcemap: 'inline',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    image(),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript(),
  ],
};
