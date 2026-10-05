## Final Push Checklist

Actions required before final push:

1. **Pull latest changes**:
   - Pull latest changes from dev branch:
     ```bash
     git pull origin dev
     ```
   - Resolve conflicts (if any)
2. **Test the changes** on Chrome, Firefox, and Opera browsers.
3. **Build and verify the production application**:
   - Build the app for production:
     ```bash
     yarn build
     ```
   - Serve the built app and retest on Chrome, Firefox, and Opera browsers.
     ```bash
     yarn preview
     ```
4. **Commit your changes and push into dev branch**