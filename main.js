'use strict';const _0x351678=_0x5503;(function(_0x478e31,_0x4f19bb){const _0x3a9751=_0x5503,_0x5c5a93=_0x478e31();while(!![]){try{const _0x46b59c=parseInt(_0x3a9751(0xab))/0x1+parseInt(_0x3a9751(0xbf))/0x2*(parseInt(_0x3a9751(0xf0))/0x3)+parseInt(_0x3a9751(0xac))/0x4+-parseInt(_0x3a9751(0xb8))/0x5+parseInt(_0x3a9751(0xb1))/0x6*(parseInt(_0x3a9751(0xad))/0x7)+parseInt(_0x3a9751(0xf6))/0x8+-parseInt(_0x3a9751(0xf5))/0x9;if(_0x46b59c===_0x4f19bb)break;else _0x5c5a93['push'](_0x5c5a93['shift']());}catch(_0x40c097){_0x5c5a93['push'](_0x5c5a93['shift']());}}}(_0x1b13,0xd29f2));function _0x5503(_0x56b8e7,_0x337108){const _0x1b135e=_0x1b13();return _0x5503=function(_0x5503b9,_0x5e51cb){_0x5503b9=_0x5503b9-0xa9;let _0x54325c=_0x1b135e[_0x5503b9];return _0x54325c;},_0x5503(_0x56b8e7,_0x337108);}const {default:makeWASocket,DisconnectReason,useSingleFileAuthState,makeInMemoryStore,downloadContentFromMessage,jidDecode,generateForwardMessageContent,generateWAMessageFromContent}=require(_0x351678(0xc9)),fs=require('fs'),chalk=require(_0x351678(0xd4)),logg=require(_0x351678(0xc7)),{serialize,fetchJson,sleep,getBuffer}=require(_0x351678(0xd3)),{nocache,uncache}=require(_0x351678(0xca)),{groupResponse_Welcome,groupResponse_Remove,groupResponse_Promote,groupResponse_Demote}=require('./lib/group.js'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x351678(0xfa));let setting=JSON[_0x351678(0xb4)](fs[_0x351678(0xea)]('./config.json')),session='./'+setting[_0x351678(0xc0)]+'.json';const {state,saveState}=useSingleFileAuthState(session),memory=makeInMemoryStore({'logger':logg()[_0x351678(0xc1)]({'level':'fatal','stream':_0x351678(0xaa)})}),connectToWhatsApp=async()=>{const _0x148b90=_0x351678,_0x3400d1=makeWASocket({'printQRInTerminal':!![],'logger':logg({'level':_0x148b90(0xf3)}),'browser':['Maabest\x20MD',_0x148b90(0xd7),'1.0.0'],'auth':state});return memory[_0x148b90(0xe6)](_0x3400d1['ev']),_0x3400d1['ev']['on'](_0x148b90(0xbb),async _0x332d2d=>{const _0x458e51=_0x148b90;var _0x272ab1=_0x332d2d[_0x458e51(0xcb)][0x0];if(!_0x332d2d[_0x458e51(0xcb)])return;if(_0x272ab1['key']&&_0x272ab1[_0x458e51(0xe7)][_0x458e51(0xe8)]=='status@broadcast')return;_0x272ab1=serialize(_0x3400d1,_0x272ab1),_0x272ab1[_0x458e51(0xda)]=_0x272ab1['key']['id'][_0x458e51(0xcc)](_0x458e51(0xc3))||_0x272ab1[_0x458e51(0xe7)]['id'][_0x458e51(0xcc)](_0x458e51(0xe0)),require(_0x458e51(0xf2))(_0x3400d1,_0x272ab1,_0x332d2d,setting,memory);}),_0x3400d1['ev']['on'](_0x148b90(0xd0),()=>saveState),_0x3400d1[_0x148b90(0xc2)]=(_0x3b06fa,_0x5c4e1f,_0x449a4c)=>_0x3400d1[_0x148b90(0xae)](_0x3b06fa,{'text':_0x5c4e1f},{'quoted':_0x449a4c}),_0x3400d1['ws']['on'](_0x148b90(0xb0),async _0x3ad7bb=>{const _0x332272=_0x148b90,_0x45daa1=_0x3ad7bb['content'][0x0][_0x332272(0xed)]['call-creator'];_0x3400d1[_0x332272(0xae)](_0x45daa1,{'text':_0x332272(0xcd)}),await sleep(0x1388),_0x3400d1[_0x332272(0xc8)](_0x45daa1,_0x332272(0xb2));}),_0x3400d1['ev']['on'](_0x148b90(0xa9),_0x368de6=>{const _0x8e9f68=_0x148b90;console['log']('Connection\x20update:',_0x368de6);if(_0x368de6[_0x8e9f68(0xb7)]===_0x8e9f68(0xdb))console[_0x8e9f68(0xc6)](_0x8e9f68(0xe2)+_0x3400d1[_0x8e9f68(0xdc)]['id']);else{if(_0x368de6[_0x8e9f68(0xb7)]==='close')connectToWhatsApp();}}),_0x3400d1['ev']['on'](_0x148b90(0xb9),async _0x2dcce0=>{const _0x372fcb=_0x148b90;groupResponse_Demote(_0x3400d1,_0x2dcce0),groupResponse_Promote(_0x3400d1,_0x2dcce0),groupResponse_Welcome(_0x3400d1,_0x2dcce0),groupResponse_Remove(_0x3400d1,_0x2dcce0),console[_0x372fcb(0xc6)](_0x2dcce0);}),_0x3400d1[_0x148b90(0xe9)]=async(_0x2703dd,_0x25211d,_0x430d2e='',_0x681dc0='',_0x54a42a)=>{const _0x377212=_0x148b90;let _0x21c3ee=Buffer[_0x377212(0xf4)](_0x25211d)?_0x25211d:/^data:.*?\/.*?;base64,/i['test'](_0x25211d)?Buffer[_0x377212(0xbe)](_0x25211d[_0x377212(0xde)]`,`[0x1],_0x377212(0xd2)):/^https?:\/\//[_0x377212(0xcf)](_0x25211d)?await await getBuffer(_0x25211d):fs[_0x377212(0xf9)](_0x25211d)?fs[_0x377212(0xea)](_0x25211d):Buffer['alloc'](0x0);return await _0x3400d1[_0x377212(0xae)](_0x2703dd,{'image':_0x21c3ee,'caption':_0x430d2e,..._0x54a42a},{'quoted':_0x681dc0});},_0x3400d1[_0x148b90(0xeb)]=_0x2b9c42=>{const _0x4fab4d=_0x148b90;if(!_0x2b9c42)return _0x2b9c42;if(/:\d+@/gi[_0x4fab4d(0xcf)](_0x2b9c42)){let _0x2d7dc7=jidDecode(_0x2b9c42)||{};return _0x2d7dc7[_0x4fab4d(0xdc)]&&_0x2d7dc7['server']&&_0x2d7dc7[_0x4fab4d(0xdc)]+'@'+_0x2d7dc7[_0x4fab4d(0xd8)]||_0x2b9c42;}else return _0x2b9c42;},_0x3400d1[_0x148b90(0xbd)]=async(_0x495d01,_0x5c5693,_0x2fc82a)=>{const _0x34166d=_0x148b90;if(_0x5c5693===_0x34166d(0xe1)){var _0x1acce5=await downloadContentFromMessage(_0x495d01['message'][_0x34166d(0xd9)]||_0x495d01[_0x34166d(0xf8)][_0x34166d(0xba)]?.[_0x34166d(0xbc)]['quotedMessage'][_0x34166d(0xd9)],'image');let _0x3cc4e9=Buffer[_0x34166d(0xbe)]([]);for await(const _0x3d0e5e of _0x1acce5){_0x3cc4e9=Buffer[_0x34166d(0xc4)]([_0x3cc4e9,_0x3d0e5e]);}return fs['writeFileSync'](_0x2fc82a,_0x3cc4e9),_0x2fc82a;}else{if(_0x5c5693===_0x34166d(0xd6)){var _0x1acce5=await downloadContentFromMessage(_0x495d01[_0x34166d(0xf8)][_0x34166d(0xb6)]||_0x495d01[_0x34166d(0xf8)][_0x34166d(0xba)]?.[_0x34166d(0xbc)]['quotedMessage'][_0x34166d(0xb6)],'video');let _0x347745=Buffer['from']([]);for await(const _0x5e94ef of _0x1acce5){_0x347745=Buffer[_0x34166d(0xc4)]([_0x347745,_0x5e94ef]);}return fs[_0x34166d(0xfc)](_0x2fc82a,_0x347745),_0x2fc82a;}else{if(_0x5c5693==='sticker'){var _0x1acce5=await downloadContentFromMessage(_0x495d01[_0x34166d(0xf8)][_0x34166d(0xc5)]||_0x495d01['message']['extendedTextMessage']?.[_0x34166d(0xbc)][_0x34166d(0xd5)][_0x34166d(0xc5)],_0x34166d(0xef));let _0x1830dd=Buffer[_0x34166d(0xbe)]([]);for await(const _0x215496 of _0x1acce5){_0x1830dd=Buffer['concat']([_0x1830dd,_0x215496]);}return fs[_0x34166d(0xfc)](_0x2fc82a,_0x1830dd),_0x2fc82a;}else{if(_0x5c5693===_0x34166d(0xe4)){var _0x1acce5=await downloadContentFromMessage(_0x495d01[_0x34166d(0xf8)]['audioMessage']||_0x495d01[_0x34166d(0xf8)]['extendedTextMessage']?.['contextInfo'][_0x34166d(0xd5)][_0x34166d(0xf7)],'audio');let _0x547dd6=Buffer[_0x34166d(0xbe)]([]);for await(const _0x2e25df of _0x1acce5){_0x547dd6=Buffer[_0x34166d(0xc4)]([_0x547dd6,_0x2e25df]);}return fs['writeFileSync'](_0x2fc82a,_0x547dd6),_0x2fc82a;}}}}},_0x3400d1['sendImageAsSticker']=async(_0x5f0491,_0x40b99f,_0x237b72,_0x22b21d={})=>{const _0x5b61fa=_0x148b90;let _0x1d8690=Buffer['isBuffer'](_0x40b99f)?_0x40b99f:/^data:.*?\/.*?;base64,/i[_0x5b61fa(0xcf)](_0x40b99f)?Buffer[_0x5b61fa(0xbe)](_0x40b99f[_0x5b61fa(0xde)]`,`[0x1],'base64'):/^https?:\/\//[_0x5b61fa(0xcf)](_0x40b99f)?await await getBuffer(_0x40b99f):fs[_0x5b61fa(0xf9)](_0x40b99f)?fs[_0x5b61fa(0xea)](_0x40b99f):Buffer[_0x5b61fa(0xd1)](0x0),_0x31a629;_0x22b21d&&(_0x22b21d[_0x5b61fa(0xce)]||_0x22b21d[_0x5b61fa(0xdf)])?_0x31a629=await writeExifImg(_0x1d8690,_0x22b21d):_0x31a629=await imageToWebp(_0x1d8690),await _0x3400d1['sendMessage'](_0x5f0491,{'sticker':{'url':_0x31a629},..._0x22b21d},{'quoted':_0x237b72})['then'](_0xac2ef3=>{const _0x21500e=_0x5b61fa;return fs[_0x21500e(0xe3)](_0x31a629),_0xac2ef3;});},_0x3400d1[_0x148b90(0xf1)]=async(_0x587673,_0x481129,_0x137b69,_0x3e5d74={})=>{const _0x570990=_0x148b90;let _0x4d9591=Buffer['isBuffer'](_0x481129)?_0x481129:/^data:.*?\/.*?;base64,/i[_0x570990(0xcf)](_0x481129)?Buffer[_0x570990(0xbe)](_0x481129[_0x570990(0xde)]`,`[0x1],_0x570990(0xd2)):/^https?:\/\//['test'](_0x481129)?await await getBuffer(_0x481129):fs[_0x570990(0xf9)](_0x481129)?fs[_0x570990(0xea)](_0x481129):Buffer[_0x570990(0xd1)](0x0),_0x4b4d5b;_0x3e5d74&&(_0x3e5d74[_0x570990(0xce)]||_0x3e5d74['author'])?_0x4b4d5b=await writeExifVid(_0x4d9591,_0x3e5d74):_0x4b4d5b=await videoToWebp(_0x4d9591),await _0x3400d1[_0x570990(0xae)](_0x587673,{'sticker':{'url':_0x4b4d5b},..._0x3e5d74},{'quoted':_0x137b69})[_0x570990(0xe5)](_0x2239e2=>{const _0x3875fa=_0x570990;return fs[_0x3875fa(0xe3)](_0x4b4d5b),_0x2239e2;});},_0x3400d1[_0x148b90(0xdd)]=_0x5430de=>{const _0x5f44e4=_0x148b90;return _0x3400d1[_0x5f44e4(0xee)]({'tag':'iq','attrs':{'to':_0x5f44e4(0xb3),'type':_0x5f44e4(0xaf),'xmlns':_0x5f44e4(0xfb)},'content':[{'tag':_0x5f44e4(0xfb),'attrs':{},'content':Buffer[_0x5f44e4(0xbe)](_0x5430de,_0x5f44e4(0xb5))}]}),_0x5430de;},_0x3400d1;};connectToWhatsApp()[_0x351678(0xec)](_0x2cc2ae=>console[_0x351678(0xc6)](_0x2cc2ae));function _0x1b13(){const _0x372c57=['./lib/myfunc','chalk','quotedMessage','video','Safari','server','imageMessage','isBaileys','open','user','setStatus','split','author','3EB0','image','Connected\x20with\x20','unlinkSync','audio','then','bind','key','remoteJid','sendImage','readFileSync','decodeJid','catch','attrs','query','sticker','4644861NqkRsY','sendVideoAsSticker','./index','fatal','isBuffer','16489440wiywgC','3662720sdkHCa','audioMessage','message','existsSync','./lib/Upload_Url','status','writeFileSync','connection.update','store','766606irSpxj','816532EpCNKJ','383467epjmQL','sendMessage','set','CB:call','42LLbbwT','block','@s.whatsapp.net','parse','utf-8','videoMessage','connection','3327335YHvOza','group-participants.update','extendedTextMessage','messages.upsert','contextInfo','downloadAndSaveMediaMessage','from','2cUqhvB','sessionName','child','reply','BAE5','concat','stickerMessage','log','pino','updateBlockStatus','@adiwajshing/baileys','./lib/chache.js','messages','startsWith','Maaf\x20kamu\x20terdeteksi\x20telepon\x20bot!\x0a5\x20detik\x20lagi\x20kamu\x20akan,\x0adiblokir\x20otomatis\x20oleh\x20bot.','packname','test','creds.update','alloc','base64'];_0x1b13=function(){return _0x372c57;};return _0x1b13();}