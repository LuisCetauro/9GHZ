import GPUDB from "./GPUDB";
import CPUDB from "./CPUDB";
import DDRMDB from "./DDRMDB";
import FonteDB from "./FonteDB";
import GabDB from "./GabDB";
import HDDDB from "./HDDDB";
import MOBODB from "./MOBODB";
import EXTDB from "./ExtraDB";


const DB = [
    { id: 1, nome: 'Placa de Vídeo Galax NVIDIA GeForce RTX 3050 EX (1-Click OC)', preço:2499,marca :'Galax',modelo:'RTX 3050',clock:'1822MHZ' , source :GPUDB[0], key:"gpu"},
    { id: 2, nome: 'Placa de Vídeo MSI NVIDIA GeForce RTX 4060 Ti Gaming X', preço:4899,marca :'MSI',modelo:'RTX 4060ti',clock:'2655MHZ'  , source :GPUDB[1], key:"gpu"},
    { id: 3, nome: 'Placa de Video Nvidia Leadtek WinFast RTX4080 HURRICANE', preço:1399,marca :'Leadtek',modelo:'RTX 4080',clock:'2505MHZ'  , source :GPUDB[2], key:"gpu"},
    { id: 4, nome: 'Placa De Vídeo ASRock AMD Radeon RX 6650 XT Steel Legend OC', preço:3699,marca :'Asrock',modelo:'RX 6650XT',clock:'2669MHZ' , source :GPUDB[3], key:"gpu"},
    { id: 5, nome: 'Placa De Vídeo Asus AMD Radeon RX 7600 V2 OC Edition' ,preço:3299,marca :'Asus',modelo:'RX 7600',clock:'2715MHZ', source :GPUDB[4], key:"gpu"},
    { id: 6, nome: 'Placa De Vídeo ASRock AMD Radeon RX 7900 XT Taichi OC',preço:9599,marca :'Asrock',modelo:'RX 7900XT',clock:'2560MHZ' , source :GPUDB[5], key:"gpu"},
    { id: 7, nome: 'Processador Intel Celeron G5905 ',preço:412, marca :'Intel',modelo:'Celeron G5905',clock:'3500MHZ' , source :CPUDB[0], key:"cpu"},
    { id: 8, nome: 'Processador Intel Core i5 13400F',preço:2279, marca :'Intel',modelo:'Core i5 13400f',clock:'4600MHZ' ,source :CPUDB[1], key:"cpu"},
    { id: 9, nome: 'Processador Intel Core i9 14900KF',preço:5500, marca :'Intel',modelo:'',clock:'6000MHZ' , source :CPUDB[2], key:"cpu"},
    { id: 10, nome: 'Processador AMD Ryzen 5 4500' ,preço:505, marca :'AMD',modelo:'Ryzen 5 4500',clock:'4100MHZ' , source :CPUDB[3], key:"cpu"},
    { id: 11, nome: 'Processador AMD Ryzen 7 5800X ' ,preço:1750, marca :'AMD',modelo:'Ryzen 7 5800X',clock:'4700MHZ' , source :CPUDB[4], key:"cpu"},
    { id: 12, nome: 'Processador AMD Ryzen 9 7950X' ,preço:4425, marca :'AMD',modelo:'Ryzen 9 7950X',clock:'5700MHZ' , source :CPUDB[5], key:"cpu"},
    { id: 13, nome: 'Memória DDR4 Geil Orion, 32GB (4x8GB) 3000MHz' , preço:563, marca :'Geil',modelo:'Orion',clock:'3000MHZ' ,source :DDRMDB[0], key:"ddrm"},
    { id: 14, nome: 'Memória DDR4 Geil Evo Potenza, 8GB, 3200MHz' , preço:115, marca :'Geil',modelo:'Evo Potenza',clock:'3200MHZ' , source :DDRMDB[1], key:"ddrm"},
    { id: 15, nome: 'Memória DDR4 XPG GAMMIX D35,16GB' , preço:270, marca :'XPG',modelo:'GAMMIX d35',clock:'3200MHZ' ,source :DDRMDB[2], key:"ddrm"},
    { id: 16, nome: 'Memória DDR5 G.Skill Ripjaws S5, 32GB (2x16GB)',preço:1295, marca :'G.SKill',modelo:'Ripjaws S5',clock:'5200MHZ' , source :DDRMDB[3], key:"ddrm"}, 
    { id: 17, nome: 'Memória DDR5 Kingston Fury Beast,16GB' ,preço:483, marca :'Kingston',modelo:'Fury Beast',clock:'5200MHZ' , source :DDRMDB[4], key:"ddrm"},
    { id: 18, nome: 'Memória DDR5 Kingston Fury Beast EXPO, 64GB (2x32GB)' , preço:1600, marca :'Kingston',modelo:'Fury Beast',clock:'5200MHZ' , source :DDRMDB[5], key:"ddrm"},
    { id: 19, nome: 'Fonte Gigabyte P450B 450W ' , preço:270, marca :'Gigabyte',modelo:'450W',clock:'' , source :FonteDB[0], key:"fonte"},
    { id: 20, nome: 'Fonte Duex 230W, Bivolt' , preço:54, marca :'Duex',modelo:'230W',clock:'' , source :FonteDB[1], key:"fonte"},
    { id: 21, nome: 'Fonte XPG 650W' , preço:411, marca :'XPG',modelo:'650W',clock:'' , source :FonteDB[2], key:"fonte"},
    { id: 22, nome: 'Fonte SuperFrame, 1000W, Full Modular' , preço:917, marca :'SuperFrame',modelo:'1000W',clock:'' , source :FonteDB[3], key:"fonte"},
    { id: 23, nome: 'Fonte XPG Kyber SuperFrame 850W' , preço:670, marca :'SuperFrame',modelo:'850W',clock:'' , source :FonteDB[4], key:"fonte"},
    { id: 24, nome: 'Fonte Pure Power 500W' , preço:200, marca :'Pure Power',modelo:'500W',clock:'' , source :FonteDB[5], key:"fonte"},
    { id: 25, nome: 'Gabinete SuperFrame Cube' , preço:388, marca :'SuperFrame',modelo:'SuperFrame Cube',clock:'' , source :GabDB[0], key:"gab"},
    { id: 26, nome: 'Gabinete  SuperFrame Magic', preço:423, marca :'SuperFrame',modelo:'SuperFrame Magic',clock:'' , source :GabDB[1], key:"gab"},
    { id: 27, nome: 'Gabinete  SuperFrame Hércules', preço:588, marca :'SuperFrame',modelo:'SuperFrame Hercules',clock:'' , source :GabDB[2], key:"gab"},  
    { id: 28, nome: 'Gabinete Cooler Master Masterbox 520 Mesh', preço:888, marca :'CoolerMaster',modelo:'Masterbox 520 Mesh',clock:'' , source :GabDB[3], key:"gab"},
    { id: 29, nome: 'Gabinete SuperFrame Vortex' , preço:488, marca :'SuperFrame',modelo:'SuperFrame Vortex',clock:'' , source :GabDB[4], key:"gab"},
    { id: 30, nome: 'Gabinete Cooler Master MasterFrame 700', preço:1288, marca :'CoolerMaster',modelo:'MasterFrame 700',clock:'' ,source :GabDB[5], key:"gab"},
    { id: 31, nome: 'HD WD Blue 1TB' , preço:280, marca :'Western Digital',modelo:'1TB',clock:'',source :HDDDB[0], key:"hd"},  
    { id: 32, nome: 'HD WD Purple Pro Surveillance 12TB', preço:2700, marca :'Western Digital',modelo:'Pro surveillance 12TB',clock:'' ,source :HDDDB[1], key:"hd"},  
    { id: 33, nome: 'SSD Kingston A400 480GB' , preço:221, marca :'Kingston',modelo:'A400 480GB',clock:'' ,source :HDDDB[2], key:"hd"},  
    { id: 34, nome: 'SSD Kingston A400 960GB', preço:345, marca :'Kingston',modelo:'A400 960GB',clock:'' ,source :HDDDB[3], key:"hd"},  
    { id: 35, nome: 'Kingston NV2 M.2 NVMe', preço:367, marca :'Kingston',modelo:'NV2 1TB',clock:'' ,source :HDDDB[4], key:"hd"},  
    { id: 36, nome: 'Adata Legend 710  M.2 2280 NVMe', preço:221, marca :'Adata',modelo:'Legend 710 512GB',clock:'' ,source :HDDDB[5], key:"hd"},
    { id: 37, nome: 'Placa Mãe Biostar H510MH', preço:470, marca :'Biostar',modelo:'H510MH LGA1200',clock:'' ,source :MOBODB[0], key:"mobo"},  
    { id: 38, nome: 'Placa Mãe Duex DX-B760ZG Gaming B760', preço:700, marca :'Duex',modelo:'DX-B760ZG LGA 1700',clock:'' ,source :MOBODB[1], key:"mobo"},  
    { id: 39, nome: 'Placa Mãe Gigabyte Z790 AERO G', preço:3800, marca :'Gigabyte',modelo:'Z790 AERO G',clock:'' ,source :MOBODB[2], key:"mobo"},  
    { id: 40, nome: 'Placa Mãe Biostar B450MHP', preço:420, marca :'Biostar',modelo:'B450MHP AM4',clock:'' ,source :MOBODB[3], key:"mobo"},  
    { id: 41, nome: 'Placa Mãe MSI MAG B550 ', preço:1600, marca :'MSI',modelo:'MAG B550 AM4',clock:'' ,source :MOBODB[4], key:"mobo"},  
    { id: 42, nome: 'Placa Mãe Gigabyte B650 AERO G', preço:3800, marca :'Gigabyte',modelo:'B650 AERO G AM5',clock:'' ,source :MOBODB[5], key:"mobo"},
    { id: 43,  nome: 'Fone Headset Gamer Vinik Chroma GH802,', preço:221, marca :'Vinik',modelo:'GH802 7.1 RGB',clock:'' ,source :EXTDB[0], key:"extra"},  
    { id: 44,  nome: 'Teclado Gamer Mecânico Redragon Lakshmi', preço:151, marca :'Redragon',modelo:'K606R PT BROWN',clock:'' ,source :EXTDB[1], key:"extra"},  
    { id: 45,  nome: 'Mouse Gamer Corsair Elite RGB', preço:400, marca :'Corsair',modelo:'Elite RGB',clock:'' ,source :EXTDB[2], key:"extra"},  
    { id: 46,  nome: 'Mousepad Gamer Vinik RGB', preço:60, marca :'Vinik',modelo:'RGB 250mmX350mm',clock:'' ,source :EXTDB[3], key:"extra"},  
    { id: 47,  nome: 'Webcam  Redragon Apex 2', preço:320, marca :'Redragon',modelo:'Apex2',clock:'' ,source :EXTDB[4], key:"extra"},  
    { id: 48,  nome: 'Microfone Fifine SuperFrame Edition SFM1, Com Braço Articulado', preço:200, marca :'Fifine',modelo:'SuperFrame Edition SFM',clock:'' ,source :EXTDB[5], key:"extra"},         
  ];
  
  export default DB;

  