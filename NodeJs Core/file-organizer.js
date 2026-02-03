const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'output', 'messy-files');
const organizedDir = path.join(__dirname, 'output', 'organized');

const categories = {
    Images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
    Documents: ['.pdf', '.docx', '.txt', '.xlsx', '.pptx'],
    Audio: ['.mp3', '.wav', '.aac'],
    Videos: ['.mp4', '.avi', '.mkv'],
    Archives: ['.zip', '.rar', '.tar', '.gz'],
    Code: ['.js', '.py', '.java', '.cpp', '.html', '.css'],
    spreadSheets: ['.xls', '.xlsx', '.csv'],
    others: []
}

const testFiles = [
    'photo1.jpg',
    'document1.pdf',
    'song1.mp3',
    'video1.mp4',
    'archive1.zip',
    'script1.js',
    'spreadsheet1.xlsx',
    'notes.txt',
    'image2.png',
    'presentation.pptx',
    'data.csv',
    'unknownFile.xyz'
];

function initializeFileDirectories() {
    if (!fs.existsSync(sourceDir)) {
        fs.mkdirSync(sourceDir, { recursive: true });

        testFiles.forEach(file => {
            fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
        });
    }

    console.log('Messy directories files are created');

    if (!fs.existsSync(organizedDir)) {
        fs.mkdirSync(organizedDir, { recursive: true }); // recursive true mean, if directory not present, create parent directories as well
    }

    Object.keys(categories).forEach(category => {
        const categoryPath = path.join(organizedDir, category);
        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath);
        }
    });
}

function getCategory(fileName) {
    const ext = path.extname(fileName).toLowerCase();
    for (const [category, extension] of Object.entries(categories)) {
        if (extension.includes(ext)) {
            return category;
        }
    }

    return 'others';
}

function organizeFiles() {
    console.log("File organizer \n");
    console.log("Source: ", sourceDir);
    console.log("Destination: ", organizedDir);

    const files = fs.readdirSync(sourceDir);

    if (files.length === 0) {
        console.log("No files to work on!");
        return;
    }

    console.log(`Found ${files.length} files to organize`);

    const stats = {
        total: 0,
        byCategory: {},
    }

    files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const stat = fs.statSync(sourcePath);
        if (stat.isDirectory()) {
            return;
        }

        const category = getCategory(file);
        const destDir = path.join(organizedDir, category);
        const destPath = path.join(destDir, file);

        fs.copyFileSync(sourcePath, destPath);

        stats.total += 1;
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

        console.log(`${file}`);
        console.log(`${category}`);
        console.log(`${stat.size}`);
    });
}

function showHelp() {
    console.log(`
        file organizer - usage:
        commands:
        init - create files
        organize - organize files into categories

        example:
        node file-organizer.js init
        node file-organizer.js organize
        `);
}

const command = process.argv[2];

switch (command) {
    case 'init':
        initializeFileDirectories();
        break;
    case 'organize':
        organizeFiles();
        break;
    default:
        showHelp();
        break;
}