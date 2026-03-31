// Meta Garden - 3D Three.js Version
// i18n: Chinese / English bilingual

const speciesDataZH = [
    {
        id: 'dodo',
        name: '渡渡鸟',
        scientificName: 'Raphus cucullatus',
        type: '鸟类',
        extinct: '1662',
        habitat: '森林',
        region: '毛里求斯',
        description: '渡渡鸟是生活在印度洋毛里求斯岛上不会飞的鸟类，由于人类的捕杀和入侵物种的影响，在被发现后仅仅二百年间就彻底灭绝了。渡渡鸟在文化中已经成为灭绝物种的标志性象征。',
        facts: [
            '渡渡鸟被水手和入侵物种捕杀至灭绝',
            '最后一次被广泛认可的目击是在1662年',
            "渡渡鸟的灭绝因为发生在有历史记录的人类活动时期，成为了灭绝概念的著名代表",
            "刘易斯·卡罗尔的《爱丽丝梦游仙境》让渡渡鸟在流行文化中广为人知"
        ],
        image: 'https://picsum.photos/id/1025/800/1000',
        position: {x: -3, y: 0, z: -2},
        rotation: {x: 0, y: 0.3, z: 0.1},
        scale: {x: 2, y: 2.8, z: 1}
    },
    {
        id: 'passenger-pigeon',
        name: '旅鸽',
        scientificName: 'Ectopistes migratorius',
        type: '鸟类',
        extinct: '1914',
        habitat: '落叶林',
        region: '北美洲',
        description: '旅鸽曾经是地球上数量最多的鸟类之一，种群数量达到数十亿只。由于过度捕猎和森林砍伐，在十九世纪末迅速减少，最后一只名叫玛莎的旅鸽于1914年在辛辛那提动物园死亡。',
        facts: [
            '旅鸽的种群数量曾经多达50亿只',
            '最后一只已知个体玛莎于1914年死于辛辛那提动物园',
            '旅鸽生活在巨大的迁徙鸟群中，飞起来可以遮天蔽日',
            '旅鸽的灭绝激发了二十世纪重要的保护运动'
        ],
        image: 'https://picsum.photos/id/65/800/600',
        position: {x: 0, y: 1, z: -3},
        rotation: {x: 0, y: -0.2, z: -0.05},
        scale: {x: 2.5, y: 2, z: 1}
    },
    {
        id: 'tasmanian-tiger',
        name: '袋狼',
        scientificName: 'Thylacinus cynocephalus',
        type: '有袋类哺乳动物',
        extinct: '1936',
        habitat: '草原、湿地',
        region: '澳大利亚（塔斯马尼亚）',
        description: '袋狼是现代已知最大的食肉有袋类动物，因为背部有条纹又被称为塔斯马尼亚虎。由于人类的猎杀、疾病以及狗的入侵，袋狼最终在1936年灭绝。尽管已经宣布灭绝，但至今仍不时有未确认的目击报告。',
        facts: [
            '袋狼是顶级捕食者，和现代老虎生态位相似',
            '它是唯一活到现代的有袋类食肉动物，幼崽在育儿袋中发育',
            '最后一只已知袋狼于1936年死于霍巴特动物园',
            '尽管已经灭绝，至今仍不时有未确认的目击报告'
        ],
        image: 'https://picsum.photos/id/1074/800/600',
        position: {x: 2.5, y: -0.5, z: -2.5},
        rotation: {x: 0.05, y: 0.4, z: 0},
        scale: {x: 2.8, y: 2.2, z: 1}
    },
    {
        id: 'stellers-sea-cow',
        name: '斯特拉海牛',
        scientificName: 'Hydrodamalis gigas',
        type: '哺乳动物',
        extinct: '1768',
        habitat: '沿海水域',
        region: '白令海',
        description: '斯特拉海牛是一种大型草食性海洋哺乳动物，属于海牛目。1741年被博物学家乔治·斯特拉发现，仅仅27年后就被人类猎杀至灭绝。它可以长到8-9米长，重达10吨。',
        facts: [
            '斯特拉海牛可以长到8-9米长，重达10吨',
            '1741年被发现，1768年就宣告灭绝',
            '生活在白令海寒冷的浅水区',
            '行动缓慢性格温顺，很容易成为猎人的目标'
        ],
        image: 'https://picsum.photos/id/1002/1000/600',
        position: {x: -1.5, y: -2, z: -1},
        rotation: {x: -0.1, y: 0.1, z: 0.05},
        scale: {x: 3.5, y: 2, z: 1}
    },
    {
        id: 'saint-helena-olive',
        name: '圣赫勒拿橄榄',
        scientificName: 'Nesiota elliptica',
        type: '植物',
        extinct: '2003',
        habitat: '森林山坡',
        region: '圣赫勒拿岛',
        description: '圣赫勒拿橄榄是南大西洋圣赫勒拿岛特有的开花植物，已经灭绝。尽管名字叫橄榄，但和真正的橄榄关系并不近，它是Nesiota属唯一的物种。最后一棵野生树死于1994年，最后一棵人工栽培树死于2003年。',
        facts: [
            '最后一棵野生树死于1994年，最后一棵人工栽培树死于2003年',
            '这是一种小型常绿乔木，可以长到约4.5米高',
            '灭绝原因是栖息地破坏和疾病',
            '基因材料保存在种子库中，有可能在未来克隆复活'
        ],
        image: 'https://picsum.photos/id/106/600/800',
        position: {x: 4, y: 1, z: 0},
        rotation: {x: 0, y: -0.5, z: -0.1},
        scale: {x: 2, y: 2.5, z: 1}
    },
    {
        id: 'quagga',
        name: '斑驴',
        scientificName: 'Equus quagga quagga',
        type: '哺乳动物',
        extinct: '1883',
        habitat: '草原',
        region: '南非',
        description: '斑驴是平原斑马的一个已灭绝亚种，仅身体前半部分有条纹，后半部分为纯棕色。最后一只野生斑驴在1870年代末被射杀，最后一只圈养斑驴于1883年在阿姆斯特丹死亡。现在有人通过反向育种试图重现斑驴。',
        facts: [
            '名字"斑驴"来源于科伊科伊语对斑马的称呼',
            '最后一只野生斑驴在1870年代末被猎杀',
            '现在有一个选育项目试图通过反向育种重现斑驴',
            '最后一只圈养斑驴于1883年死于阿姆斯特丹'
        ],
        image: 'https://picsum.photos/id/1069/800/900',
        position: {x: 3, y: 2, z: -1.5},
        rotation: {x: -0.05, y: -0.3, z: 0.1},
        scale: {x: 2.2, y: 2.4, z: 1}
    },
    {
        id: 'great-auk',
        name: '大海雀',
        scientificName: 'Pinguinus impennis',
        type: '鸟类',
        extinct: '1844',
        habitat: '岩石岛屿',
        region: '北大西洋',
        description: '大海雀是一种不会飞的海雀，是近代北大西洋第一种灭绝的鸟类。它身高75-85厘米，重约5公斤，因为羽毛被用来制作枕头而被人类猎杀至灭绝。最后一对确认的大海雀于1844年在冰岛埃尔德岛被杀死。',
        facts: [
            '大海雀身高75-85厘米，体重约5公斤',
            '它被猎杀是因为其羽毛被用来制作枕头',
            '最后一对确认的大海雀于1844年在冰岛埃尔德岛被杀死',
            '它是近代北大西洋第一种灭绝的不会飞的鸟类'
        ],
        image: 'https://picsum.photos/id/1024/600/900',
        position: {x: -4, y: 1.5, z: -0.5},
        rotation: {x: 0.1, y: 0.2, z: -0.05},
        scale: {x: 1.8, y: 2.6, z: 1}
    },
    {
        id: 'franklin-tree',
        name: '富兰克林树',
        scientificName: 'Franklinia alatamaha',
        type: '植物',
        extinct: '19世纪初（野外）',
        habitat: '河岸',
        region: '美国佐治亚州',
        description: '富兰克林木是山茶科富兰克林木属唯一的物种，1765年在佐治亚州的阿尔塔马哈河被植物学家发现，19世纪初就在野外灭绝了。现在所有存活的植株都来自约翰·巴特拉姆收集的种子。',
        facts: [
            '大约1803年起就在野外灭绝',
            '夏末会开出美丽的芳香白色花朵',
            '这棵树以本杰明·富兰克林命名',
            '现在所有现存的富兰克林树都是克隆繁殖的'
        ],
        image: 'https://picsum.photos/id/1080/700/900',
        position: {x: -2.5, y: 2, z: -1},
        rotation: {x: 0.05, y: -0.4, z: 0},
        scale: {x: 2, y: 2.7, z: 1}
    }
];

const speciesDataEN = [
    {
        id: 'dodo',
        name: 'Dodo',
        scientificName: 'Raphus cucullatus',
        type: 'Bird',
        extinct: '1662',
        habitat: 'Forest',
        region: 'Mauritius',
        description: 'The dodo was a flightless bird endemic to the island of Mauritius, east of Madagascar in the Indian Ocean. Related to pigeons and doves, it stood about a meter tall, weighing around 10.6-21.1 kg, with a brownish-grey plumage, yellow feet, a grey, naked head, and a black, yellow, and green hooked beak.',
        facts: [
            'The dodo was hunted to extinction by sailors and invasive species.',
            'The last widely accepted sighting of a dodo was in 1662.',
            "The dodo's extinction became a well-known concept because it occurred during recorded human history.",
            "Lewis Carroll's Alice in Wonderland helped popularize the dodo in popular culture."
        ],
        image: 'https://picsum.photos/id/1025/800/1000',
        position: {x: -3, y: 0, z: -2},
        rotation: {x: 0, y: 0.3, z: 0.1},
        scale: {x: 2, y: 2.8, z: 1}
    },
    {
        id: 'passenger-pigeon',
        name: 'Passenger Pigeon',
        scientificName: 'Ectopistes migratorius',
        type: 'Bird',
        extinct: '1914',
        habitat: 'Deciduous forests',
        region: 'North America',
        description: 'The passenger pigeon or wild pigeon was a species of pigeon that was endemic to North America. Once one of the most abundant birds on Earth, with flocks numbering up to four billion, the species became extinct through over-hunting and deforestation.',
        facts: [
            'At one time, the passenger pigeon population was as many as 5 billion individuals.',
            'The last known individual, Martha, died at the Cincinnati Zoo in 1914.',
            'Passenger pigeons lived in enormous migratory flocks that could block out the sun.',
            'Their extinction inspired major conservation efforts in the 20th century.'
        ],
        image: 'https://picsum.photos/id/65/800/600',
        position: {x: 0, y: 1, z: -3},
        rotation: {x: 0, y: -0.2, z: -0.05},
        scale: {x: 2.5, y: 2, z: 1}
    },
    {
        id: 'tasmanian-tiger',
        name: 'Thylacine',
        scientificName: 'Thylacinus cynocephalus',
        type: 'Mammal',
        extinct: '1936',
        habitat: 'Grasslands, wetlands',
        region: 'Australia (Tasmania)',
        description: 'The thylacine was the largest known carnivorous marsupial of modern times. It was commonly known as the Tasmanian tiger because of its striped lower back, or the Tasmanian wolf. Native to continental Australia, Tasmania and New Guinea, it is believed to have become extinct in the 20th century.',
        facts: [
            'The thylacine was an apex predator, like the modern tiger.',
            'It was the only marsupial that survived into modern times to give birth to underdeveloped young that then developed in a pouch.',
            'The last known thylacine died in Hobart Zoo in 1936.',
            'Despite its extinction, unconfirmed sightings are still reported today.'
        ],
        image: 'https://picsum.photos/id/1074/800/600',
        position: {x: 2.5, y: -0.5, z: -2.5},
        rotation: {x: 0.05, y: 0.4, z: 0},
        scale: {x: 2.8, y: 2.2, z: 1}
    },
    {
        id: 'stellers-sea-cow',
        name: "Steller's Sea Cow",
        scientificName: 'Hydrodamalis gigas',
        type: 'Mammal',
        extinct: '1768',
        habitat: 'Coastal waters',
        region: 'Bering Sea',
        description: "Steller's sea cow was a large herbivorous marine mammal that was first described by naturalist Georg W. Steller in 1741. It was a member of the order Sirenia, which includes today's four species of manatee and the dugong. Within just 27 years of being discovered by Europeans, it was hunted to extinction.",
        facts: [
            'Steller\'s sea cow could grow up to 8-9 meters long and weigh up to 10 tons.',
            'It was discovered in 1741 and extinct by 1768.',
            'It lived in cold, shallow waters near the Bering Sea.',
            'It was slow-moving and docile, making it easy prey for hunters.'
        ],
        image: 'https://picsum.photos/id/1002/1000/600',
        position: {x: -1.5, y: -2, z: -1},
        rotation: {x: -0.1, y: 0.1, z: 0.05},
        scale: {x: 3.5, y: 2, z: 1}
    },
    {
        id: 'saint-helena-olive',
        name: 'Saint Helena Olive',
        scientificName: 'Nesiota elliptica',
        type: 'Plant',
        extinct: '2003',
        habitat: 'Forest slopes',
        region: 'Saint Helena',
        description: 'The Saint Helena olive is an extinct species of flowering plant endemic to the island of Saint Helena in the southern Atlantic Ocean. Despite its name, it is not closely related to the true olives. It was the only member of the genus Nesiota.',
        facts: [
            'The last wild tree died in 1994, and the last cultivated tree died in 2003.',
            'It was a small evergreen tree growing to about 15 feet tall.',
            'Extinction was caused by habitat destruction and disease.',
            'Genetic material is preserved in seed banks for potential future cloning.'
        ],
        image: 'https://picsum.photos/id/106/600/800',
        position: {x: 4, y: 1, z: 0},
        rotation: {x: 0, y: -0.5, z: -0.1},
        scale: {x: 2, y: 2.5, z: 1}
    },
    {
        id: 'quagga',
        name: 'Quagga',
        scientificName: 'Equus quagga quagga',
        type: 'Mammal',
        extinct: '1883',
        habitat: 'Grasslands',
        region: 'South Africa',
        description: 'The quagga is an extinct subspecies of the plains zebra that was endemic to South Africa. It was distinguished by having stripes only on the front of its body, with stripes fading towards the rear, becoming solid brown on the hindquarters and white underneath.',
        facts: [
            'The name "quagga" comes from the Khoikhoi word for zebra.',
            'The last wild quagga was shot in the late 1870s.',
            'A selective breeding program is attempting to recreate the quagga through back-breeding.',
            'The last captive quagga died in Amsterdam in 1883.'
        ],
        image: 'https://picsum.photos/id/1069/800/900',
        position: {x: 3, y: 2, z: -1.5},
        rotation: {x: -0.05, y: -0.3, z: 0.1},
        scale: {x: 2.2, y: 2.4, z: 1}
    },
    {
        id: 'great-auk',
        name: 'Great Auk',
        scientificName: 'Pinguinus impennis',
        type: 'Bird',
        extinct: '1844',
        habitat: 'Rocky islands',
        region: 'North Atlantic',
        description: 'The great auk was a species of flightless alcid that became extinct in the mid-19th century. It was the only modern species in the genus Pinguinus, and it was originally found in the North Atlantic, from Canada to Greenland, Iceland, the British Isles, and Scandinavia.',
        facts: [
            'The great auk stood 75-85 cm tall and weighed around 5 kg.',
            'It was hunted down for its feathers, which were used in pillows.',
            'The last confirmed pair was killed in 1844 on Eldey Island, Iceland.',
            'It was the first flightless bird from the North Atlantic to go extinct in modern times.'
        ],
        image: 'https://picsum.photos/id/1024/600/900',
        position: {x: -4, y: 1.5, z: -0.5},
        rotation: {x: 0.1, y: 0.2, z: -0.05},
        scale: {x: 1.8, y: 2.6, z: 1}
    },
    {
        id: 'franklin-tree',
        name: 'Franklin Tree',
        scientificName: 'Franklinia alatamaha',
        type: 'Plant',
        extinct: 'Early 19th century (wild)',
        habitat: 'River banks',
        region: 'Georgia (USA)',
        description: 'Franklinia is a monotypic genus of flowering plants in the tea family Theaceae, with only one species, Franklinia alatamaha. The tree was discovered by botanists in 1765 on the Altamaha River in Georgia, but it has been extinct in the wild since the early 19th century. All living specimens today descend from seeds collected by John Bartram.',
        facts: [
            'Extinct in the wild since around 1803.',
            'It produces beautiful fragrant white flowers in late summer.',
            'The tree is named after Benjamin Franklin.',
            'All existing Franklinia trees are clones, propagated from the original seeds.'
        ],
        image: 'https://picsum.photos/id/1080/700/900',
        position: {x: -2.5, y: 2, z: -1},
        rotation: {x: 0.05, y: -0.4, z: 0},
        scale: {x: 2, y: 2.7, z: 1}
    }
];

let currentLang = 'zh';
let currentSpeciesData = speciesDataZH;

// Three.js Variables
let scene, camera, renderer;
let speciesMeshes = [];
let mouse = {x: 0, y: 0};
let targetRotationY = 0;
let targetRotationX = 0;
let currentRotationY = 0;
let currentRotationX = 0;
let autoRotateSpeed = 0.08;

// DOM Elements
const container = document.getElementById('garden-container');
const detailPanel = document.getElementById('detail-panel');
const backBtn = document.getElementById('back-btn');
const langSwitcher = document.getElementById('lang-switcher');
const mainTitle = document.getElementById('main-title');
const mainSubtitle = document.getElementById('main-subtitle');

// Initialize Three.js
function initThreeJS() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a140e);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Renderer
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.insertBefore(renderer.domElement, container.firstChild);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load all species
    loadAllSpecies();

    // Event listeners
    container.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    // Start animation loop
    animate();
}

function loadTexture(url) {
    return new Promise((resolve, reject) => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.crossOrigin = "anonymous";
        textureLoader.load(url, resolve, undefined, reject);
    });
}

async function loadAllSpecies() {
    for (const species of currentSpeciesData) {
        try {
            const texture = await loadTexture(species.image);
            texture.colorSpace = THREE.SRGBColorSpace;
            
            const geometry = new THREE.PlaneGeometry(species.scale.x, species.scale.y);
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.92
            });
            
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(species.position.x, species.position.y, species.position.z);
            mesh.rotation.set(species.rotation.x, species.rotation.y, species.rotation.z);
            mesh.userData.species = species;
            
            scene.add(mesh);
            speciesMeshes.push(mesh);
        } catch (e) {
            console.error('Failed to load', species.name, e);
        }
    }
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    targetRotationY = mouse.x * 0.8;
    targetRotationX = -mouse.y * 0.3;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    // Smooth auto-rotation with mouse influence
    currentRotationY += (targetRotationY + autoRotateSpeed * 0.2 - currentRotationY) * 0.05;
    currentRotationX += (targetRotationX - currentRotationX) * 0.05;
    
    scene.rotation.y = currentRotationY;
    scene.rotation.x = currentRotationX;

    renderer.render(scene, camera);
}

// Raycasting for click detection
function onClick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2(x, y);
    raycaster.setFromCamera(mouseVector, camera);
    
    const intersects = raycaster.intersectObjects(speciesMeshes);
    if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        const species = clickedMesh.userData.species;
        // Find the full species data in current language
        const currentSpecies = currentSpeciesData.find(s => s.id === species.id);
        openDetail(currentSpecies);
    }
}

function openDetail(species) {
    document.getElementById('detail-name').textContent = species.name;
    document.getElementById('detail-scientific').textContent = species.scientificName;
    document.getElementById('detail-type').textContent = species.type;
    document.getElementById('detail-extinct').textContent = species.extinct;
    document.getElementById('detail-habitat').textContent = species.habitat;
    document.getElementById('detail-region').textContent = species.region;
    document.getElementById('detail-description').textContent = species.description;
    document.getElementById('detail-image').src = species.image;
    document.getElementById('detail-image').alt = species.name;
    
    const factsContainer = document.getElementById('detail-facts');
    factsContainer.innerHTML = '<h3 class="facts-title">' + (currentLang === 'zh' ? '相关知识' : 'Interesting Facts') + '</h3>';
    species.facts.forEach(fact => {
        const factEl = document.createElement('div');
        factEl.className = 'fact-item';
        factEl.innerHTML = `<p>${fact}</p>`;
        factsContainer.appendChild(factEl);
    });
    
    detailPanel.classList.remove('hidden');
    detailPanel.classList.add('open');
    window.scrollTo(0, 0);
}

function closeDetail() {
    detailPanel.classList.remove('open');
    setTimeout(() => {
        detailPanel.classList.add('hidden');
    }, 400);
}

function updatePageTexts() {
    if (currentLang === 'zh') {
        mainTitle.textContent = '元花园';
        mainSubtitle.textContent = '珍藏那些已经消失的生命';
        backBtn.textContent = '← 返回花园';
        document.querySelectorAll('.info-item label')[0].textContent = '类型';
        document.querySelectorAll('.info-item label')[1].textContent = '灭绝年份';
        document.querySelectorAll('.info-item label')[2].textContent = '栖息地';
        document.querySelectorAll('.info-item label')[3].textContent = '分布区域';
    } else {
        mainTitle.textContent = 'Meta Garden';
        mainSubtitle.textContent = 'Preserving memory of what once grew and roamed';
        backBtn.textContent = '← Back to Garden';
        document.querySelectorAll('.info-item label')[0].textContent = 'Type';
        document.querySelectorAll('.info-item label')[1].textContent = 'Extinction Year';
        document.querySelectorAll('.info-item label')[2].textContent = 'Habitat';
        document.querySelectorAll('.info-item label')[3].textContent = 'Region';
    }
}

// Event listeners
container.addEventListener('click', onClick);
backBtn.addEventListener('click', closeDetail);

langSwitcher.addEventListener('click', (e) => {
    if (e.target.classList.contains('lang-btn')) {
        currentLang = e.target.dataset.lang;
        currentSpeciesData = currentLang === 'zh' ? speciesDataZH : speciesDataEN;
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        updatePageTexts();
    }
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updatePageTexts();
    initThreeJS();
});
