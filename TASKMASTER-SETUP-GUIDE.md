# TaskMaster Setup Guide - CognitechAI Astro Migration

## 📋 Overview

TaskMaster is now properly initialized for the CognitechAI Astro Migration project. This system helps manage the complex migration from React to Astro with structured task management, progress tracking, and automation tools.

## 🚀 Quick Start

### Check Project Status
```bash
node tm.cjs init
# Shows: Project overview, task count, total hours, progress
```

### List All Tasks
```bash
node tm.cjs list
# Shows: All tasks organized by status (Todo, In Progress, Review, Done)
```

### Start Working on a Task
```bash
node tm.cjs start astro-setup-1
# or
node tm.cjs start 1
```

### Complete a Task
```bash
node tm.cjs complete astro-setup-1
```

### View Task Details
```bash
node tm.cjs show astro-setup-1
```

## 🎯 Available Tasks

The project has **11 migration tasks** totaling **130 hours**:

### Critical Priority Tasks
1. **Astro Project Setup** (8h) - Due: 2025-08-11
2. **Layout Components Migration** (12h) - Due: 2025-08-15  
3. **Pages Migration** (16h) - Due: 2025-08-25
4. **Testing & Deployment** (12h) - Due: 2025-08-30

### High Priority Tasks
5. **Base Structure** (6h) - Due: 2025-08-12
6. **UI Components Migration** (16h) - Due: 2025-08-18
7. **Landing Components Migration** (18h) - Due: 2025-08-20
8. **React Islands Creation** (14h) - Due: 2025-08-22
9. **API Routes Creation** (10h) - Due: 2025-08-23

### Medium Priority Tasks
10. **SEO Optimization** (10h) - Due: 2025-08-27
11. **Performance Optimization** (8h) - Due: 2025-08-28

## 📁 Project Structure

```
E:\LLM\cogintech-ai-landing\
├── taskmaster.json          # Main task configuration
├── taskmaster.config.js     # Project settings & templates
├── tm.cjs                   # CLI tool
├── tasks/                   # Individual task files
│   ├── 1-setup-astro-project.md
│   ├── 2-create-base-structure.md
│   └── ... (11 total tasks)
├── PRD-ASTRO-MIGRATION.md   # Product Requirements Document
└── astro-migration/         # Target Astro project (to be created)
```

## 🛠️ TaskMaster Features

### 1. Task Management
- **Status Tracking**: todo → in-progress → review → done
- **Priority Levels**: critical, high, medium, low
- **Time Estimation**: Total 130 hours across 11 tasks
- **Due Dates**: Organized 3-4 week timeline
- **Assignee Tracking**: Currently set to "developer"

### 2. Templates & Automation
New Astro-specific templates are available:
- `astro-component`: For static Astro components
- `react-component`: For React islands
- `astro-page`: For Astro pages
- `api-route`: For API endpoints

### 3. Migration Configuration
Automated classification of components:
- **Convert to Astro**: Hero, Footer, Navbar, ProblemStatement, Solution, Testimonials
- **Keep as React Islands**: LeadForm, BookDemo, CookieConsent, PricingSandbox

## 📊 Progress Tracking

### Current Status
- ✅ **Completed**: 0/11 tasks (0%)
- 🚀 **In Progress**: 0/11 tasks
- ⏳ **Todo**: 11/11 tasks
- ⏱️ **Remaining Time**: 130 hours

### Key Milestones
- **Week 1**: Astro setup + base structure (14h)
- **Week 2**: Component migration (46h) 
- **Week 3**: Pages + API routes (42h)
- **Week 4**: Optimization + deployment (28h)

## 🚦 Getting Started

### Step 1: Review the PRD
Read `PRD-ASTRO-MIGRATION.md` for complete migration strategy and requirements.

### Step 2: Start First Task
```bash
node tm.cjs start astro-setup-1
```

### Step 3: Follow Task Instructions
Each task has detailed markdown files in the `tasks/` directory with:
- Subtasks checklist
- Required commands
- Acceptance criteria
- Dependencies

### Step 4: Track Progress
Use `node tm.cjs status` regularly to monitor project progress.

## 🔧 Commands Reference

| Command | Description | Example |
|---------|-------------|---------|
| `node tm.cjs init` | Show project overview | - |
| `node tm.cjs list` | List all tasks | - |
| `node tm.cjs status` | Show progress statistics | - |
| `node tm.cjs start <id>` | Begin working on task | `start 1` |
| `node tm.cjs complete <id>` | Mark task as done | `complete astro-setup-1` |
| `node tm.cjs show <id>` | Show task details | `show 2` |

## 📝 Task File Structure

Each task follows this format:
```markdown
# Task Title

**Status:** todo  
**Priority:** critical  
**Assignee:** developer  
**Due Date:** 2025-08-11  
**Tags:** infrastructure, setup  
**Time:** 8h  

## Description
[Detailed description]

## Subtasks
- [ ] Subtask 1
- [ ] Subtask 2

## Commands
```bash
# Required commands
```

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
```

## 🎯 Migration Strategy

### Phase 1: Infrastructure (Week 1)
1. Set up Astro project with React integration
2. Create base layouts and structure
3. Configure build and deployment

### Phase 2: Component Migration (Week 2-3)
1. Migrate static components to Astro
2. Create React islands for interactive components
3. Migrate pages to file-based routing

### Phase 3: Optimization (Week 4)
1. SEO improvements
2. Performance optimization
3. Testing and deployment

## 🤝 Team Collaboration

### Daily Workflow
1. Check progress: `node tm.cjs status`
2. Review tasks: `node tm.cjs list`
3. Start next task: `node tm.cjs start <task-id>`
4. Update progress regularly
5. Complete when finished: `node tm.cjs complete <task-id>`

### Best Practices
- Update task status immediately when starting/completing
- Keep only one task in "in-progress" status at a time
- Review subtasks and acceptance criteria before marking complete
- Use the detailed task files for implementation guidance

## 🆘 Troubleshooting

### TaskMaster Not Working?
```bash
# Check if taskmaster.json exists
ls -la taskmaster.json

# Reinitialize if needed
node tm.cjs init
```

### Tasks Not Showing?
```bash
# Check tasks directory
ls -la tasks/

# Verify task index
cat tasks/index.json
```

## 📚 Resources

- **PRD**: `PRD-ASTRO-MIGRATION.md` - Complete migration strategy
- **Task Files**: `tasks/` directory - Detailed implementation guides
- **Configuration**: `taskmaster.config.js` - Project settings
- **Astro Docs**: https://docs.astro.build
- **Islands Architecture**: https://docs.astro.build/en/concepts/islands/

---

**TaskMaster Status**: ✅ Initialized and Ready  
**Project**: CognitechAI Astro Migration  
**Total Tasks**: 11  
**Estimated Duration**: 3-4 weeks  
**Next Action**: Start task `astro-setup-1`