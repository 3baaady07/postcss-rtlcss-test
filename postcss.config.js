import postcssRTLCSS from 'postcss-rtlcss';
import { Autorename } from 'postcss-rtlcss/options';

export default {
   plugins: {
      ['postcss-rtlcss']: postcssRTLCSS({
         autoRename: Autorename.strict,
         stringMap: [
            {
               name: 'prev-next',
               search: 'prev',
               replace: 'next'
            }
         ]
      }),
   },
}
