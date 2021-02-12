find ./* -iname "*" | while read file; do
	extension="${file##*.}"
	filename="${file%.*}"
	echo "Processing $extension $filename"
	if [ "$extension" == 'png' ]; then type="png"; else type="jpeg"; fi
	sips -Z 3840 -s format $type "$file" --out "${filename}_3840.${extension}" &> /dev/null
	sips -Z 2560 -s format $type "$file" --out "${filename}_2560.${extension}" &> /dev/null
	sips -Z 1920 -s format $type "$file" --out "${filename}_1920.${extension}" &> /dev/null
	sips -Z 1024 -s format $type "$file" --out "${filename}_1024.${extension}" &> /dev/null
	sips -Z 720 -s format $type "$file" --out "${filename}_720.${extension}" &> /dev/null
	sips -Z 480 -s format $type "$file" --out "${filename}_480.${extension}" &> /dev/null
	sips -Z 360 -s format $type "$file" --out "${filename}_360.${extension}" &> /dev/null
	sips -Z 240 -s format $type "$file" --out "${filename}_240.${extension}" &> /dev/null
done
