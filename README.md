
---

# **CivicConnect – Smart City Issue Reporter**

## **Overview**

CivicConnect is a web-based platform that allows citizens to report city issues such as potholes, trash, broken streetlights, and other public concerns. The system provides a geo-tagging map interface, upvoting features to prioritize reports, and an audit trail to ensure transparency when staff update issue statuses.

---

## **Tech Stack**

### **Frontend**

* HTML
* Tailwind CSS
* Vue.js
* Axios
* Vue Toastification (alerts)
* Vue Router (navigation)
* Pinia (state management)
* VeeValidate or Yup (form validation)
* SweetAlert2 (confirmation dialogs)
* Heroicons (UI icons)
* ESLint + Prettier (code formatting)
* Composer (for managing PHP dependencies)

### **Map**

* Leaflet.js
* OpenStreetMap

### **Backend**

* PHP (vanilla)
* PHPMailer (email notifications)
* Dotenv (phpdotenv) for environment variables
* Intervention Image (image optimization)
* MIME type validator (file security)

### **Database**

* MySQL

### **Storage**

* Local storage (`/uploads`) for issue photos

---

## **Features**

### **Citizen**

* Submit issues (description, category, location, photo)
* Upvote existing issues
* Track status of submitted issues
* OTP verification for account or login
* Email verification upon registration
* Captcha to prevent bot signups
* Optional chatbot guidance for reporting issues

### **Staff**

* Login to staff dashboard (with OTP if desired)
* Change issue status (Pending → In Progress → Resolved)
* Audit trail auto-logged
* Filter issues by status or upvotes

### **Admin**

* Login to admin panel
* Create, update, and delete users
* Assign roles (Citizen / Staff)
* View all audit logs
* Monitor system stats (issues count, status distribution, top upvoted issues)

---

## **Database Tables**

### **1. users**

`id, name, email, password_hash, role, created_at`

### **2. issues**

`id, title, description, category, latitude, longitude, photo_path, reported_by, timestamp, status`

### **3. upvotes**

`id, user_id, issue_id, timestamp`

### **4. audit_trail**

`id, issue_id, staff_id, old_status, new_status, timestamp`

---

## **Setup**

### **1. Clone Repository**

```bash
git clone https://github.com/EbadShelby/CivicConnect.git
```

### **2. Database Setup**

* Create MySQL database `civicconnect`
* Import `database.sql`

### **3. Configure Backend**

* Inside `backend/`, copy `.env.example` → `.env`
* Update database credentials and email SMTP settings

### **4. Start Server**

* Run XAMPP (Apache + MySQL)
* Access backend endpoints via:

  ```
  http://localhost/CivicConnect/backend/
  ```

### **5. Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

### **6. Access Frontend**

```
http://localhost:5173/
```

---

## **Folder Structure**

```bash
CivicConnect/
├─ frontend/                # Vue app (UI)
│  ├─ src/
│  ├─ public/
│  └─ package.json
│
├─ backend/                 # PHP API
│  ├─ api/
│  ├─ config/
│  ├─ vendor/               # Composer packages
│  ├─ uploads/              # Local image storage
│  └─ .env
│
├─ database.sql
├─ README.md
└─ .gitignore
```

---

## **Usage Workflow**

### **Citizen Flow**

1. Register or log in
2. Submit an issue using the report form
3. Select location on the map
4. Upload a photo (optional)
5. Other users upvote the issue
6. Citizen monitors issue status changes

### **Staff Flow**

1. Log in to staff panel
2. View upvoted or recent issues
3. Change issue status (Pending → In Progress → Resolved)
4. Audit trail automatically logs action

---

## **License**

**MIT License** — free to use, modify, and distribute for academic or personal projects.

---
