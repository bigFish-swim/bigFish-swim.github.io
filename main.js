// main.js：负责把 data.js 里的数据装进 index.html 里

document.addEventListener("DOMContentLoaded", () => {
    // 1. 填充基础信息
    document.getElementById("name").innerText = siteData.name;
    document.getElementById("title").innerText = siteData.title;
    document.getElementById("about").innerText = siteData.about;

    // 2. 填充技能标签
    const skillsList = document.getElementById("skills-list");
    siteData.skills.forEach(skill => {
        const span = document.createElement("span");
        span.className = "skill-tag";
        span.innerText = skill;
        skillsList.appendChild(span);
    });

    // 3. 填充项目卡片
    const projectsList = document.getElementById("projects-list");
    siteData.projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        
        // 使用模板字符串拼接 HTML
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.desc}</p>
            <a href="${project.link}" class="project-link" target="_blank">查看项目 &rarr;</a>
        `;
        
        projectsList.appendChild(card);
    });

    // 4. 填充底部社交链接
    const socialLinks = document.getElementById("social-links");
    // 生成 GitHub 链接
    if (siteData.social.github) {
        const githubLink = document.createElement("a");
        githubLink.href = siteData.social.github;
        githubLink.innerText = "GitHub";
        githubLink.target = "_blank";
        socialLinks.appendChild(githubLink);
    }
    // 生成邮箱链接
    if (siteData.social.email) {
        const emailLink = document.createElement("a");
        emailLink.href = `mailto:${siteData.social.email}`;
        emailLink.innerText = "Email";
        socialLinks.appendChild(emailLink);
    }
});
