import Link from 'next/link';

export default function Skills() {
  const skillCategories = [
    {
      title: '🎨 Design & Creative Ecosystem',
      description: 'With over 18 years of experience, I specialize in crafting visually stunning, user-centric interfaces. My expertise spans wireframing, prototyping, and high-fidelity design using industry-standard tools to deliver intuitive and accessible digital experiences.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/figma.svg', name: 'Figma' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/adobe-photoshop.svg', name: 'Photoshop' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/adobe-illustrator.svg', name: 'Illustrator' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/adobe-xd.svg', name: 'Adobe XD' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/adobe-premiere.svg', name: 'Premiere' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/adobe-after-effects.svg', name: 'After Effects' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/sketch.svg', name: 'Sketch' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/framer.svg', name: 'Framer' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/webflow.svg', name: 'Webflow' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/notion.svg', name: 'Notion' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/storybook.svg', name: 'Storybook' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/canva.svg', name: 'Canva' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/miro.svg', name: 'Miro' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/figma.svg', name: 'Figma Jam' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/abstract.svg', name: 'Abstract' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/zeplin.svg', name: 'Zeplin' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/invision.svg', name: 'InVision' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/marvel.svg', name: 'Marvel' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/principle.svg', name: 'Principle' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/proto-io.svg', name: 'Proto.io' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/axure.svg', name: 'Axure RP' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/balsamiq.svg', name: 'Balsamiq' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/overflow.svg', name: 'Overflow' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/lucide.svg', name: 'Lucide' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/simple-icons.svg', name: 'Simple Icons' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/svg.svg', name: 'SVG' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/unsplash.svg', name: 'Unsplash' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/dribbble.svg', name: 'Dribbble' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/behance.svg', name: 'Behance' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/artstation.svg', name: 'ArtStation' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/pexels.svg', name: 'Pexels' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/coolors.svg', name: 'Coolors' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/colorhunt.svg', name: 'Color Hunt' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/font-awesome.svg', name: 'Font Awesome' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/google-fonts.svg', name: 'Google Fonts' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/linear.svg', name: 'Linear' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/clickup.svg', name: 'ClickUp' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/trello.svg', name: 'Trello' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/asana.svg', name: 'Asana' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/monday.svg', name: 'Monday' },
      ]
    },
    {
      title: '✦ AI Agentic & GenAI Stack',
      description: 'Pioneering the intersection of design and artificial intelligence, I leverage cutting-edge GenAI models and agentic workflows to automate processes, enhance user experiences, and build intelligent, context-aware products.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/openai.svg', name: 'OpenAI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/claude-ai.svg', name: 'Claude AI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/gemini.svg', name: 'Gemini' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/langchain.svg', name: 'LangChain' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/hugging-face.svg', name: 'HuggingFace' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/mistral.svg', name: 'Mistral' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/cohere.svg', name: 'Cohere' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/pinecone.svg', name: 'Pinecone' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/weaviate.svg', name: 'Weaviate' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/chroma.svg', name: 'Chroma' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/supabase.svg', name: 'Supabase' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/replicate.svg', name: 'Replicate' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/stability-ai.svg', name: 'Stability AI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/anthropic.svg', name: 'Anthropic' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/perplexity.svg', name: 'Perplexity' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/midjourney.svg', name: 'Midjourney' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/leonardo-ai.svg', name: 'Leonardo AI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/runway.svg', name: 'Runway' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/elevenlabs.svg', name: 'ElevenLabs' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/murf.svg', name: 'Murf AI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/heygen.svg', name: 'HeyGen' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/synthesia.svg', name: 'Synthesia' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/voiceflow.svg', name: 'Voiceflow' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/stack-ai.svg', name: 'Stack AI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/dify.svg', name: 'Dify' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/flowise.svg', name: 'Flowise' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/langsmith.svg', name: 'LangSmith' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/crewai.svg', name: 'CrewAI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/autogen.svg', name: 'AutoGen' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/gpt4all.svg', name: 'GPT4All' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/ollama.svg', name: 'Ollama' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/lm-studio.svg', name: 'LM Studio' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/comfyui.svg', name: 'ComfyUI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/invoke-ai.svg', name: 'Invoke AI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/automatic1111.svg', name: 'Stable Diffusion' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/krea.svg', name: 'Krea AI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/phosphor.svg', name: 'Phosphor' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/tabler.svg', name: 'Tabler' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/radix.svg', name: 'Radix UI' },
      ]
    },
    {
      title: '💻 Frontend & UI Development',
      description: 'Bridging the gap between design and engineering, I possess deep technical knowledge of modern frontend frameworks. I build responsive, pixel-perfect, and highly performant web applications that bring complex designs to life.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/html5.svg', name: 'HTML5' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/css.svg', name: 'CSS3' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/javascript.svg', name: 'JavaScript' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/typescript.svg', name: 'TypeScript' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/react.svg', name: 'React' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/nextjs_icon_dark.svg', name: 'Next.js' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/vue.svg', name: 'Vue.js' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/svelte.svg', name: 'Svelte' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/angular.svg', name: 'Angular' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/tailwindcss.svg', name: 'Tailwind' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/bootstrap.svg', name: 'Bootstrap' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/sass.svg', name: 'SASS' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/less.svg', name: 'LESS' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/styled-components.svg', name: 'Styled Components' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/emotion.svg', name: 'Emotion' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/panda-css.svg', name: 'Panda CSS' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/chakra-ui.svg', name: 'Chakra UI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/mui.svg', name: 'Material UI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/ant-design.svg', name: 'Ant Design' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/shadcn-ui.svg', name: 'shadcn/ui' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/aceternity.svg', name: 'Aceternity' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/magicui.svg', name: 'Magic UI' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/21st.svg', name: '21st.dev' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/v0.svg', name: 'v0' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/lovable.svg', name: 'Lovable' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/bolt.svg', name: 'Bolt' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/vitejs.svg', name: 'Vite' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/webpack.svg', name: 'Webpack' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/rollup.svg', name: 'Rollup' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/esbuild.svg', name: 'ESBuild' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/parcel.svg', name: 'Parcel' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/turborepo.svg', name: 'Turborepo' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/nx.svg', name: 'Nx' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/bun.svg', name: 'Bun' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/pnpm.svg', name: 'pnpm' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/yarn.svg', name: 'Yarn' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/npm.svg', name: 'npm' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/nuxt.svg', name: 'Nuxt' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/astro.svg', name: 'Astro' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/gatsby.svg', name: 'Gatsby' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/remix.svg', name: 'Remix' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/solidjs.svg', name: 'SolidJS' },
      ]
    },
    {
      title: '☁️ Cloud & Infrastructure',
      description: 'Experienced in deploying and managing robust, scalable architectures. I utilize modern cloud platforms and containerization to ensure seamless deployment pipelines and high availability for enterprise-grade applications.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/amazon-web-services.svg', name: 'AWS' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/google-cloud.svg', name: 'Google Cloud' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/azure.svg', name: 'Azure' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/docker.svg', name: 'Docker' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/kubernetes.svg', name: 'Kubernetes' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/terraform.svg', name: 'Terraform' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/ansible.svg', name: 'Ansible' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/jenkins.svg', name: 'Jenkins' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/github-actions.svg', name: 'GitHub Actions' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/gitlab.svg', name: 'GitLab' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/bitbucket.svg', name: 'Bitbucket' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/vercel.svg', name: 'Vercel' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/netlify.svg', name: 'Netlify' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/cloudflare.svg', name: 'Cloudflare' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/digitalocean.svg', name: 'DigitalOcean' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/heroku.svg', name: 'Heroku' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/railway.svg', name: 'Railway' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/render.svg', name: 'Render' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/fly-io.svg', name: 'Fly.io' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/nginx.svg', name: 'Nginx' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/apache.svg', name: 'Apache' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/linux.svg', name: 'Linux' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/ubuntu.svg', name: 'Ubuntu' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/debian.svg', name: 'Debian' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/alpine.svg', name: 'Alpine' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/redis.svg', name: 'Redis' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/mongodb.svg', name: 'MongoDB' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/postgresql.svg', name: 'PostgreSQL' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/mysql.svg', name: 'MySQL' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/prisma.svg', name: 'Prisma' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/drizzle.svg', name: 'Drizzle' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/turso.svg', name: 'Turso' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/neon.svg', name: 'Neon' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/planetscale.svg', name: 'PlanetScale' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/firebase.svg', name: 'Firebase' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/appwrite.svg', name: 'Appwrite' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/pocketbase.svg', name: 'PocketBase' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/supabase.svg', name: 'Supabase' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/docker-compose.svg', name: 'Docker Compose' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/traefik.svg', name: 'Traefik' },
      ]
    },
    {
      title: '📋 Testing & Project Management',
      description: 'Committed to delivering flawless products, I employ rigorous testing methodologies and agile project management tools to streamline collaboration, track progress, and ensure every release meets the highest quality standards.',
      skills: [
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/playwright.svg', name: 'Playwright' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/cypress.svg', name: 'Cypress' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/selenium.svg', name: 'Selenium' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/jest.svg', name: 'Jest' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/vitest.svg', name: 'Vitest' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/mocha.svg', name: 'Mocha' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/chai.svg', name: 'Chai' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/testing-library.svg', name: 'Testing Library' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/storybook.svg', name: 'Storybook' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/chromatic.svg', name: 'Chromatic' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/jira.svg', name: 'Jira' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/confluence.svg', name: 'Confluence' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/slack.svg', name: 'Slack' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/discord.svg', name: 'Discord' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/microsoft-teams.svg', name: 'MS Teams' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/zoom.svg', name: 'Zoom' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/figma.svg', name: 'FigJam' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/linear.svg', name: 'Linear' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/height.svg', name: 'Height' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/shortcut.svg', name: 'Shortcut' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/notion.svg', name: 'Notion' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/obsidian.svg', name: 'Obsidian' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/logseq.svg', name: 'Logseq' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/grammarly.svg', name: 'Grammarly' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/postman.svg', name: 'Postman' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/insomnia.svg', name: 'Insomnia' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/hoppscotch.svg', name: 'Hoppscotch' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/swagger.svg', name: 'Swagger' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/readme.svg', name: 'ReadMe' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/stoplight.svg', name: 'Stoplight' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/retool.svg', name: 'Retool' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/appsmith.svg', name: 'Appsmith' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/tooljet.svg', name: 'ToolJet' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/budibase.svg', name: 'Budibase' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/airtable.svg', name: 'Airtable' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/sheetjs.svg', name: 'SheetJS' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/zapier.svg', name: 'Zapier' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/make.svg', name: 'Make' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/n8n.svg', name: 'n8n' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/github-copilot.svg', name: 'GitHub Copilot' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/cursor.svg', name: 'Cursor' },
        { icon: 'https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/windsurf.svg', name: 'Windsurf' },
      ]
    },
  ];

  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          {/* Profile Card */}
          <div className="col-xl-4">
            <div className="card profile-card">
              <div className="card-body">
                <div className="image text-center">
                  <img loading="lazy" src="/assets/img/images/profile.png" alt="profile" />
                </div>
                <div className="text">
                  <h3 className="card-title">Praveen Kumar K 👋</h3>
                  <p>Senior UX/UI Architect &amp; <span className="ai-badge">✦ AI Agentic</span> Design Strategist with <strong>18+ years</strong> of experience across <strong>14+ countries</strong>.</p>
                  <div className="common-button-groups">
                    <Link className="btn btn-call" href="/contact">Book A call</Link>
                    <a className="btn btn-call" href="/assets/Praveen_Kumar_K_Resume.pdf" target="_blank">Download CV</a>
                    <button className="btn btn-copy" data-clipboard-text="praveenkumar.kanneganti@gmail.com">Copy Email</button>
                  </div>
                  <div className="social-media-icon">
                    <ul className="list-unstyled">
                      <li><a href="https://www.facebook.com/pranu21m/" target="_blank"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/praveenkumarkanneganti/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                      <li><a href="https://www.behance.net/praveen-ui-ux" target="_blank"><i className="fab fa-behance"></i></a></li>
                      <li><a href="https://wa.me/918884263999" target="_blank" title="WhatsApp"><i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i></a></li>
                      <li><a href="https://t.me/+918884263999" target="_blank" title="Telegram"><i className="fab fa-telegram" style={{ color: '#0088cc' }}></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Box */}
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">Specialized <span>Skills</span></h1>
                  </div>
                  <div className="available-btn"><span><i className="fas fa-circle"></i> Available For Hire</span></div>
                </div>

                {/* SKILLS SECTION */}
                <div className="skills-page" id="skills-page">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category reveal-up">
                      <h2 className="main-common-title skill-cat-title">{category.title}</h2>
                      <p className="skill-cat-desc" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                        {category.description}
                      </p>
                      <div className="row g-3">
                        {category.skills.map((skill, i) => (
                          <div key={i} className="col-xl-2 col-md-3 col-sm-4 col-4">
                            <div className="skill-card reveal-up">
                              <div className="skill-icon">
                                <img loading="lazy" src={skill.icon} alt={skill.name} />
                              </div>
                              <span>{skill.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* CTA Slider */}
                  <div className="work-together-slider mt-4">
                    <div className="slider-main d-flex gap-4 align-items-center">
                      <div className="slider-item">
                        <Link href="/contact">Let's 👋 Work Together</Link>
                        <Link href="/contact">Let's 👋 Work Together</Link>
                      </div>
                      <div className="slider-item">
                        <Link href="/contact">Let's 👋 Work Together</Link>
                        <Link href="/contact">Let's 👋 Work Together</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <div className="background-shapes">
        <div className="shape-1 common-shape">
          <img loading="lazy" src="/assets/img/bg/banner-shape-1.png" alt="shape" />
        </div>
        <div className="shape-2 common-shape">
          <img loading="lazy" src="/assets/img/bg/banner-shape-1.png" alt="shape" />
        </div>
        <div className="threed-shape-1 move-with-cursor" data-value="1">
          <img loading="lazy" src="/assets/img/bg/object-3d-1.png" alt="3d-1" />
        </div>
        <div className="threed-shape-2 move-with-cursor" data-value="1">
          <img loading="lazy" src="/assets/img/bg/object-3d-2.png" alt="3d-2" />
        </div>
      </div>
    </section>
  );
}
