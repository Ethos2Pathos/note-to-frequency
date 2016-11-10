import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const ucfirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const pkg = require(`./package.json`);

const name = pkg.name.split(`-`).map((s, i) => {
  if(i === 0) return s;
  return ucfirst(s);
}).join(``);

const plugins = [
  babel(),
  nodeResolve({
    module: true,
    jsnext: true
  })
];

let min = ``;

if(process.env.NODE_ENV === `production`){
  min = `.min`;
  plugins.push(uglify());
}

export default {

  entry: `src/index.js`,

  plugins,

  targets: [
    {
      dest: `dist/${name}${min}.js`,
      moduleName: name,
      format: `umd`
    }
  ]

};
