# =============================
# User Management
# =============================
user 'devuser' do
    comment 'Developer User'
    home '/home/devuser'
    shell '/bin/bash'
    manage_home true
    action :create
  end
  
  # =============================
  # Install & Start Apache
  # =============================
  package 'apache2' do
    action :install
  end
  
  service 'apache2' do
    action [:enable, :start]
  end
  
  # =============================
  # Install & Configure MySQL
  # =============================
  package 'mysql-server' do
    action :install
  end
  
  service 'mysql' do
    action [:enable, :start]
  end
  
  # =============================
  # Install JDK, Maven, and Git
  # =============================
  %w(default-jdk maven git).each do |pkg|
    package pkg do
      action :install
    end
  end
  
  # =============================
  # Set Up a Cron Job for Backups
  # =============================
  cron 'daily_backup' do
    minute '0'
    hour '2'
    command '/usr/bin/tar -czf /backup/home.tar.gz /home'
  end
  
  # =============================
  # Modify System Hosts File
  # =============================
  file '/etc/hosts' do
    content "127.0.0.1 localhost\n192.168.1.10 myserver.local"
    mode '0644'
    action :create
  end
  
  # =============================
  # Change File Permissions
  # =============================
  file '/var/www/html/index.html' do
    mode '0755'
    owner 'www-data'
    group 'www-data'
  end
  
  # =============================
  # Configure SSH
  # =============================
  template '/etc/ssh/sshd_config' do
    source 'sshd_config.erb'
    notifies :restart, 'service[ssh]', :immediately
  end
  
  service 'ssh' do
    action [:enable, :start]
  end
  
  # =============================
  # Set Hostname
  # =============================
  hostname 'myserver.local' do
    action :set
  end
  
  # =============================
  # Install & Configure Firewall
  # =============================
  package 'ufw' do
    action :install
  end
  
  execute 'enable_firewall' do
    command 'ufw enable'
    action :run
  end
  
  execute 'allow_ssh' do
    command 'ufw allow 22'
    action :run
  end
  
  # =============================
  # Install & Start Docker
  # =============================
  package 'docker.io' do
    action :install
  end
  
  service 'docker' do
    action [:enable, :start]
  end
  
  # =============================
  # Configure Swap Space
  # =============================
  execute 'create_swap' do
    command 'fallocate -l 1G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile'
    not_if 'swapon --show | grep /swapfile'
  end
  
  # =============================
  # Set System Timezone
  # =============================
  execute 'set_timezone' do
    command 'timedatectl set-timezone Asia/Kolkata'
    only_if { File.exist?('/usr/bin/timedatectl') }
  end
  
  # =============================
  # Disable Root Login via SSH
  # =============================
  execute 'disable_root_ssh' do
    command "sed -i 's/^PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config && systemctl restart sshd"
    only_if "grep -q '^PermitRootLogin yes' /etc/ssh/sshd_config"
  end
  
  # =============================
  # Clear Temporary Files Periodically
  # =============================
  cron 'clear_tmp' do
    minute '0'
    hour '3'
    command 'rm -rf /tmp/*'
  end
  
  