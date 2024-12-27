## STEPS TO RUN THIS PROJECT

## 1. Install SDK52 and Project Dependencies

Make sure you have all the required dependencies installed for your project:

```bash
npm install
expo install expo@52.0.0
```

## 2. Open your app.json or app.config.js and add the following under the expo field:
```bash
{
  "expo": {
    "newArchEnabled": true
  }
}

```
## 3. Run expo-doctor to check your project for potential issues:
```bash
npx expo-doctor
```

## 4. Install Dependencies with Correct Versions
```bash
npx expo install --check
```

## 5. Test the Project
```bash
npx expo start -c
```

