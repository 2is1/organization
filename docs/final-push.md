## Final Push Checklist

Actions required before final push:

1. **Pull latest changes**:
   - Pull latest changes from dev branch:
     ```bash
     git pull origin dev
     ```
   - Resolve conflicts (if any)
2. **Test the changes** on desktop Chrome, Firefox, and Opera browsers and Android Chrome and Firefox.
3. **Build and verify the production application**:
   - Build the app for production:
     ```bash
     yarn build
     ```
   - Serve the built app and retest on desktop Chrome, Firefox, and Opera browsers and Android Chrome and Firefox.
     ```bash
     yarn preview
     ```
4. **Commit your changes and push into dev branch**