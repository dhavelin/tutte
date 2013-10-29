/* Services */

angular.module('tutte').

  constant('lengths', {

    // The lengths of the various wheels

    chi: {
      w1: 41,
      w2: 31,
      w3: 29,
      w4: 26,
      w5: 23
    },
    motor: {
      w1: 61,
      w2: 37
    },
    psi: {
      w1: 43,
      w2: 47,
      w3: 51,
      w4: 53,
      w5: 59
    }

  }).


  service('initialData', function() {

    this.key = 'Y4J9IFYFZYUHHIVXCTVFRU4EKELLBTMI3ZRDPBACP9UXCCBUEUKQX4MW8IRYOXN88ZTMMSYYQKK9DPBJYBLDNYFOMMMXQPHWPYTS' +
               'PX/K/RTXSFLIOMJGCBTYYKF8OUPAEFCEUZPO9CW9OJKCYTSNGJJL/IO4BOWPYFZXZP/EVX//LMN4O9HF9NQWY/IQNSV3CDZEKODI' +
               'Q9AKZYHRHHXZK9D8QGMVDVTUTV+OKIY9RSO9MPUCISUQUSQ98I8MG3MT/AV9N+3LYVSMCOFMXX9/SF+IXJKCTO9HTZHTJH8X8FNG' +
               '44ARR+GS4YFI+NIBDRT++CQ9UQTESN8ZEOVSJLC8UMG8TRZTYTZIFMZICT8SSP+HX4FTGSOQM3B+DKWAIVNC84PYVSC8T43SDOS4' +
               'MQWRZ/YFBFVIBXUSFFUIH8UDA/KRDIXQSGBCJZIQBQ8PNOB4LQWEIW9TBXY8JO/RNRZRSXHF3YNUXBBNC9RMUQEIMG+SGSRDQNNP' +
               'NLVFJMTYVMBPEIMIKXHNYYDYU9KH8COVMMY9SKNOC4PJQDFGUO3ADX4E8MK3HO9YNCXTUMEKUZ89/OGHGBKNP8SUZ9HHXOMIFUGF' +
               'P3KABQF3W9ETNNM9YAZQUJWBWUGCK/J3Q+CXGG/WIJ+GRL9/J/+OAU4ASZPVVD+84TOSWZYV8KI+ETD4ZRE+ITNCOX/ZZJBTC/BN' +
               'E9HPSXBEN9CCCI9/LUDQPYHKXOVTCAKCRADZNMM+PSTXZEV3CYELRWNRAMXPCSRKNMXFS++TUTQLW9NERZ3VY8HFK/WY9O9IIB3B' +
               'NYGG9ECAM/JURQ3YA8+BY4ZR8DFPNOHBYYJ9Y+/BLSLWVZUSKBNGRE4E3W8YBWUZVUDJORC3NRG4A4G8CDFBIYVAYO9QDOK+VFPT' +
               'PVOSI88RPCSY8IHC/KLH+MB93VWD3/SEIHBL+FPKQ+WDKWHLYSJ88BWVNUQ3PFMVSRVQJICF89RCZISGKFBEVB/W+NPMVHOVIHHS' +
               'GMIIYR8F4J3TJTQYRXVQODH8K8NKHQY83DKW/9R/KMOZCWRUVKCXE+3RGTATZ/LP34VBPG/RTP33JNNVJVDA/AKP+8/QRCDQZDQC' +
               'SIZPLF4PPFC/QXKXQC3GKPARI8JMFCK3UHLJGNMTSHX98FUAWVE98D88MG/EQJDVMCN84KIDRKVH8Z8HMXRVNBDZWSA9QUCZNOPV' +
               '8QEDTZUTQ/+VHKOBBOVNGFECPFBEOYU4W44EQPTSYZF9ISGPJRYVKHX4PHKKRNIQLKG8XW9JPK9JRIPR4OAWYZ4KYIUNF3XTXIJU' +
               'FBOIZH+TOKK8BJX9+QUYQE+NTN9ZNHWAXHNJ3KNJMKKKJEI+3JFT8ACQLCQ+WZL9AZXKM+K3X9Q9FIMOII/NIVA4QPUBXERSFMCS' +
               'AQF9D98IGZOIDGK3BNWZAAB+FUYN/K/A+WAJTJIIWYUZKKWZUFKLLZMH4ZG4ZTMJUIK+FPDCBUSAA3BM/DX8P++WFQKD9SX9WVEB' +
               'OKFYL/GLNBTFMSICTPS/H3AE9GCMVVIMUBLKK/SVSHDMKRBXRO+/ZLY8YSI3UKPXFQBQJSHNRD/HYNRDGELQOECUBCH+TDDLGOXB' +
               'N8V4ZPFSYQCWXX/BYES39J3EHWJMC9TNGLSZJF/TGLF/98EQYEZ/3+F9WA/J3KLB/VU8VIGPDIYL/+T943CBGV8FS8GAHU8ECQDA' +
               'PW9QBM/+DCOU3P+/LPXVYFBIB+JRBXZSSGMCOS+DIB/YMYPCBPAESUN8LFKLPBFQSTBA3ML3VPXYXJNX8SB9MFHXCWWPRYO4NTQO' +
               'EKYQUMBNPYS8KGFLHIOZMODJRWW3TJAYBJUWE3N8PKMA+CWI8KG4CPCC+GQYYHIKRV8P4FSYEJQBKYGUZ9SSYZFLYVM8FEQYKHCV' +
               'IFG4TNZJVVJNSS/8JYJKM8/B8T+E/DTL3GNMGQJ+TOJV3JRDTDLRL8IMVHVV+CJM9WQ8DGB44ZBCPPBVUYIFPHSIKOTA9ZEQI33G' +
               'TSG+HXJTXWDHUSP9CV3CQQ4YCXWGZTKQ9JLDET9VCVU9UM8DXZYP+IX8B/WUNMLIHS4OQSHHS9UN+X4CHJQBG4+HHYDU9Q9DZFGM' +
               'M9SFUDPEKHEVYGYXDMGBYQUFNVFHYJFRLAXIXFYLNKJVGOKG+SQT3ZPENRU9QFKGP+PY4SQZSEWNBBNUAHGOYUXQHKSMZ9EC/3FE' +
               'A3GOLXBI3IX8ZXOZ8GRSW4PBKVRIIZL3+K3I88HXM/8YF8AZ9DIAY8K+VQLLDAX+O9UXUKLUQHQQMFYGKPPI4P8YNFHJNEBUFCXG' +
               'HSFFKSYPQ93494XMEJFPYGSMMVMMLSLNJGR/LIDUIJ9RGHNRWSGTEV9PI+BGSC+MXQAY3HFH+P4LT/9Z3FX9QJGEQSVHC8PG8HSV' +
               'E9Q/AKPT9M3D3ZTUPMPHXISHWLMKF+EY+QH8V+3A4YJF3HCSYZSNQTULUUJ9PM8OMKD+QVQNQ/HRMIXCXVYLFG+QLL9GU9BIFXYV' +
               'NHD9FXRFX8YWHSSFRQUGNXPAMJVYK9MRBVQZVE/VXJFLAAKKJW8ZQ3TUKNKXGK9Y9FMIU+NGHVLRLDXAJYZE9MK8YAYZHPN4SJ/X' +
               'JXPBVS3WOJ8NGVAPUMBHHTOHHLMDYOBZKZ+NVVN+99FHYIYO8OZYVNZCGHO8DM3UWZRWOYJJM9HHR9MCUCSCQHMAHWJVIAEJVC/J' +
               'LUVPCXIXCQXHCNGKY/9ONSTTM3SSVZ3+/KV+HNLZTXCD9WWHBY9G+JWKEAMPAAHFVKV8CFPSTV+IHRVMZ3IQRII34BLESLHPCVVX' +
               'FUA+DSD9Z/ZKV9BZNMVFR8KX4DQUU8RF4IARWJOM/3K+GKXMAUTQVTT+BMJU+8/+/FHG/L/S4WYIQNVGMUTM98GOTLAVU+KORW/L' +
               'MGGETZ/DXDKQV34NCMLN/UOZFJ4ZZCDGFOJGWCLAJAZZFT8GXKQTX9ZF+GC/FTH3/PGUMVUY8CRR83MVDQQ9LY4XZF8V/QHBPYOR' +
               'MXJ8/ITCQLHK3B/DWJ/X8INP3CAJHSMNT3VOP8VB8WDBAJNHG8JPYEXVY9XIKB+HTZU8PSGOGMPDMD3RBKAC+DR3OLAIG/FMECX4' +
               'B/VX++3Y34EV+DDWXVBCRNAFLJQV//4EI4BSQO+M8KMMU8SUIEUGMFESSZTAF+NIL/VPUW8QNKQNF9NA3DITSGZB8W9BRILGQUXO' +
               'ZNVSKQXD8O+MIGMV/GAHW/K/MSVTINQTB3+ONGI/AKM+GLLLV4J8USPXAQHYHRJRVBPFKK8UYD93ZKYEUX98S4D+MQBGGLPA9G+A' +
               'XTKMQCBSNPOGR+M+TW9AZW/XOGVCJSTMDE+VSHTZTE3E9GMFMUUQDQG8IJMIRO3WWEDQDQQK+VGHSSRT+CC4SNEMYA/T44ELYC8N' +
               'N/HHVKI9+A+PRWITH9ZTRRAJRXVSTT3SFXYFGSYOXWGRMJ/RT33RP3CKY8SSO4AGARW4QFRMQESVRDGBZ+Z89DC/OIXSXFDDC+G3' +
               'MQEN8LELB9BO9O/8YUVMKNFKUQXPF+J9YZ8SXC/CVWRLM8GXNKHQ9C8EYB/NJFN8Y8BYGVHIMXK3PPP3HIYCRFTXMWDSMQFIUE33' +
               'NXLSJQSQE/HUXLMOPCRMH3TZ4HYZHA/JOX3P+RKUXMSRX4RHXFO+ROYAE8F/9PBHEWMDLB3QGSG8EIQO/TZMD+NIHPNZVFQV3T34' +
               'NB8CM/WFVSW3QMFQ8S3FA8EO99JGUASAVX3IYAEJKYMY99FHTTMQXX38PUJNEKXDCQ/WOLCU84ARGNVORKFXKF8+RV89/TBI8LIP' +
               'ZJSWI9YTSHVLQ8VDC8+DEFEAMDRCICCXNKV+IA4++3I89TCSRBHK8//XM9TASBKUY3N8CUPF9DOXZBMWJWCCCMGALFOHXETYHSVZ' +
               'DFYJXANIGMZIIUCJMQ4ETJ83PV9HVGKP+GPSDBCYJOE8JK8IHQVWSYCB98P8PBQ38V43NZBGDEW98SSJM/WBWSK8MNOMEHXEPS4D';

  }).

  service('converters', function() {

    var orderedChars = [ '/', 'T', '3', 'O', '9', 'H', 'N', 'M',
                         '4', 'L', 'R', 'G', 'I', 'P', 'C', 'V',
                         'E', 'Z', 'D', 'B', 'S', 'Y', 'F', 'X',
                         'A', 'W', 'J', '+', 'U', 'Q', 'K', '8' ];

    var charTable = {
      '/' : '00000', 'T' : '00001', '3' : '00010', 'O' : '00011',
      '9' : '00100', 'H' : '00101', 'N' : '00110', 'M' : '00111',
      '4' : '01000', 'L' : '01001', 'R' : '01010', 'G' : '01011',
      'I' : '01100', 'P' : '01101', 'C' : '01110', 'V' : '01111',
      'E' : '10000', 'Z' : '10001', 'D' : '10010', 'B' : '10011',
      'S' : '10100', 'Y' : '10101', 'F' : '10110', 'X' : '10111',
      'A' : '11000', 'W' : '11001', 'J' : '11010', '+' : '11011',
      'U' : '11100', 'Q' : '11101', 'K' : '11110', '8' : '11111',
    };

    this.num2char = function(num) {
      return orderedChars[num];
    };

    this.getImpulseArray = function(seq, impulse) {
      return [].map.call(seq, function(ch) {
        return charTable[ch].substr(impulse - 1, 1);
      });
    };

  }).

  service('utils', function() {

    /**
     * Compares two strings, character-by-character. Returns an array, the
     * length of which is equal to the the length of the first string. An array
     * element is 1 if the strings do not match at that point, or 0 if they do
     * and the character is part of a run of matching characters at least
     * `matchLen` long.
     *
     * @param {string} str1 One of the strings to be compared.
     * @param {string} str2 The other string to be compared.
     * @param {number} matchLen The minimum length of string to be matched.
     * @returns {Array} Returns an array indicating positions
     */
    this.compare = function(str1, str2, matchLen) {

      var i, j;

      var str1arr = Array.prototype.map.call(str1, function(x) {
        return x.charCodeAt(0);
      });
      var str2arr = Array.prototype.map.call(str2, function(x) {
        return x.charCodeAt(0);
      });

      var diffArray = str1arr.map(function(x, index) {
        return str2arr[index] ? x ^ str2arr[index] : 1;
      });

      var firstMatch = -1;
      var lastMatch = -1;
      var matching = false;
      matchLen = matchLen - 1;

      for (i = 0; i < diffArray.length; i++) {
        if (diffArray[i] === 0) {
          lastMatch = i;
          if (!matching) {
            firstMatch = i;
            matching = true;
          }
        } else {
          if (matching) {
            if (lastMatch - firstMatch < matchLen) {
              for (j = firstMatch; j <= lastMatch; j++) {
                diffArray[j] = 1;
              }
            }
            matching = false;
          }
        }
      }

      // If we were still matching at the end of the string...
      if (matching) {
        if (lastMatch - firstMatch < matchLen) {
          for (j = firstMatch; j <= lastMatch; j++) {
            diffArray[j] = 1;
          }
        }
      }

      // Normalise array to 0/1 values and return
      return diffArray.map(function(x) {
        return x === 0 ? 0 : 1;
      });

    };

    /**
     * Marks up a string by wrapping content in <span>s according to runs of
     * zeros in a parallel match array.
     *
     * @param {string} source The string to be formatted.
     * @param {Array} matchArr The array containing the match information.
     * @returns {string} Returns a marked-up string.
     */
    this.format = function(source, matchArr) {

      var formattedRow = '';
      var spanOpen = false;

      for (var i = 0; i < source.length; i++) {
        if (matchArr[i] === 0 && !spanOpen) {
          spanOpen = true;
          formattedRow += '<span class="highlight">';
        } else if (matchArr[i] === 1 && spanOpen) {
          formattedRow += '</span>';
          spanOpen = false;
        }
        formattedRow += source.charAt(i);
      }

      return formattedRow;

    };

    /**
     * Logical AND two arrays together, element-by-element.
     *
     * @param {Array} arr1 The first array.
     * @param {Array} arr2 The second array.
     * @returns {Array} Returns an array containing the result of AND-ing together the two
     *  arrays, element-by-element.
     */
    this.and = function(arr1, arr2) {
      return arr1.map(function(x, index) {
        return x && arr2[index];
      });
    };

    /**
     * Takes a string of 1s and 0s, and returns them broken out into an array of 1s and 0s.
     *
     * @param {string} str The string to convert.
     * @returns {Array} Returns an array containing the string converted to bits.
     */
    this.string2bits = function(str) {
      return Array.prototype.map.call(str, function(x) {
        return (x === '0') ? 0 : 1;
      });
    };

  });
