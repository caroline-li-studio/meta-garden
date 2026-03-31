// Meta Garden - Extinct Species Database
const speciesData = [
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Dodo_rencontr%C3%A9_%C3%A0_l%27%C3%AEle_Maurice_by_Roland_G._Meier.png/800px-Dodo_rencontr%C3%A9_%C3%A0_l%27%C3%AEle_Maurice_by_Roland_G._Meier.png',
        size: {width: 280, height: 380},
        position: {left: '5%', top: '10%'}
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Passenger_pigeon_%283446831025%29.jpg/800px-Passenger_pigeon_%283446831025%29.jpg',
        size: {width: 320, height: 260},
        position: {left: '25%', top: '25%'}
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Thylacine_cropped.jpg/800px-Thylacine_cropped.jpg',
        size: {width: 350, height: 280},
        position: {left: '45%', top: '5%'}
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Steller%27s_sea_cow_%28Hydrodamalis_gigas%29.jpg/800px-Steller%27s_sea_cow_%28Hydrodamalis_gigas%29.jpg',
        size: {width: 400, height: 250},
        position: {left: '30%', top: '48%'}
    },
    {
        id: 'silver-berry',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nesiota_elliptica_hab.svg/800px-Nesiota_elliptica_hab.svg.png',
        size: {width: 240, height: 320},
        position: {left: '65%', top: '35%'}
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Quagga_photo.jpg/800px-Quagga_photo.jpg',
        size: {width: 280, height: 300},
        position: {left: '60%', top: '18%'}
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Great_auk_by_John_J_Audubon.jpg/800px-Great_auk_by_John_J_Audubon.jpg',
        size: {width: 220, height: 320},
        position: {left: '75%', top: '45%'}
    },
    {
        id: 'california-golden-poppy',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Franklinia_alatamaha_bloom.jpg/800px-Franklinia_alatamaha_bloom.jpg',
        size: {width: 260, height: 340},
        position: {left: '12%', top: '45%'}
    }
];

// DOM Elements
const gardenContainer = document.getElementById('garden-container');
const landingPage = document.getElementById('landing');
const detailPage = document.getElementById('detail');
const backBtn = document.getElementById('back-btn');

// Render overlapping species on landing page
function renderGarden() {
    speciesData.forEach(species => {
        const el = document.createElement('div');
        el.className = 'species-overlap';
        el.style.width = `${species.size.width}px`;
        el.style.height = `${species.size.height}px`;
        el.style.left = species.position.left;
        el.style.top = species.position.top;
        el.innerHTML = `
            <img src="${species.image}" alt="${species.name}" loading="lazy">
            <div class="species-label">
                <h3>${species.name}</h3>
                <p>${species.scientificName}</p>
            </div>
        `;
        el.addEventListener('click', () => openDetail(species));
        gardenContainer.appendChild(el);
    });
}

// Open detail view
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
    factsContainer.innerHTML = '';
    species.facts.forEach(fact => {
        const factEl = document.createElement('div');
        factEl.className = 'fact-item';
        factEl.innerHTML = `<p>${fact}</p>`;
        factsContainer.appendChild(factEl);
    });
    
    landingPage.classList.add('hidden');
    detailPage.classList.remove('hidden');
    window.scrollTo(0, 0);
    
    // Update URL hash
    history.pushState({detail: true, speciesId: species.id}, '', `#${species.id}`);
}

// Back to garden
function closeDetail() {
    detailPage.classList.add('hidden');
    landingPage.classList.remove('hidden');
    history.pushState({detail: false}, '', '#');
}

// Event listeners
backBtn.addEventListener('click', closeDetail);

window.addEventListener('popstate', (e) => {
    if (e.state && e.state.detail) {
        const species = speciesData.find(s => s.id === e.state.speciesId);
        if (species) openDetail(species);
    } else {
        closeDetail();
    }
});

// Check if URL has hash on load
document.addEventListener('DOMContentLoaded', () => {
    renderGarden();
    const hash = window.location.hash.slice(1);
    if (hash) {
        const species = speciesData.find(s => s.id === hash);
        if (species) openDetail(species);
    }
});
